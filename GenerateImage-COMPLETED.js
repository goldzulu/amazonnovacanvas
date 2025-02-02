import { BedrockImageGenerator } from './BedrockImageGenerator.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create timestamped output directory
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const outputDir = path.join(__dirname, 'output', timestamp);

// Initialize the generator
const generator = new BedrockImageGenerator({
    outputDirectory: outputDir
});

// Define comprehensive generation parameters
const inferenceParams = {
    taskType: "TEXT_IMAGE",
    textToImageParams: {
        text: "A serene mountain lake at golden hour, with crystal clear water reflecting snow-capped peaks, photorealistic style, soft natural lighting, wide-angle view",
        negativeText: "blurry, oversaturated, cartoon-style, artificial-looking, dark shadows, distorted reflections"
    },
    imageGenerationConfig: {
        numberOfImages: 2,              // Generate two variations
        quality: "premium",             // Higher quality for final output
        width: 1280,                    // Maximum supported width
        height: 720,                    // 16:9 aspect ratio
        cfgScale: 7.5,                  // Balanced adherence to prompt
        seed: Math.floor(Math.random() * 858993459)  // Random seed for variation
    }
};

async function generateImage() {
    try {
        console.log('Generating images with the following parameters:');
        console.log('- Prompt:', inferenceParams.textToImageParams.text);
        console.log('- Quality:', inferenceParams.imageGenerationConfig.quality);
        console.log('- Dimensions:', `${inferenceParams.imageGenerationConfig.width}x${inferenceParams.imageGenerationConfig.height}`);
        
        const imagePaths = await generator.generateImages(inferenceParams);
        
        console.log('\nGeneration successful!');
        console.log('Generated images saved to:');
        imagePaths.forEach(path => console.log(`- ${path}`));
    } catch (error) {
        console.error('Error generating images:', error.message);
        process.exit(1);
    }
}

// Self-executing async function with error handling
(async () => {
    try {
        await generateImage();
    } catch (error) {
        console.error('Fatal error:', error.message);
        process.exit(1);
    }
})();
