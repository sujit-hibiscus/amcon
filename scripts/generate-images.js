import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const publicDir = path.join(process.cwd(), 'public')
const imagesDir = path.join(publicDir, 'images')
const productsDir = path.join(imagesDir, 'products')

async function createDirectories() {
  try {
    // Create public directory
    if (!existsSync(publicDir)) {
      await mkdir(publicDir, { recursive: true })
      console.log('Created public directory')
    }

    // Create images directory
    if (!existsSync(imagesDir)) {
      await mkdir(imagesDir, { recursive: true })
      console.log('Created images directory')
    }

    // Create products directory
    if (!existsSync(productsDir)) {
      await mkdir(productsDir, { recursive: true })
      console.log('Created products directory')
    }

    console.log('All directories created successfully!')
  } catch (error) {
    console.error('Error creating directories:', error)
    process.exit(1)
  }
}

createDirectories()
