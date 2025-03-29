
# Blog Images Storage

This folder is dedicated to storing all blog post images in an organized manner.

## Organization Structure

Images should be organized using the following conventions:

1. Each blog post should have its own folder named after the post slug or ID
2. Feature images should be named `feature.jpg` or `feature.png`
3. Gallery images should be named sequentially (e.g., `image-1.jpg`, `image-2.jpg`)
4. Image file names should use kebab-case (e.g., `hero-image.jpg`)

## Image Optimization Guidelines

- All images should be optimized for web use (compressed, proper dimensions)
- Use WebP format when possible for better performance
- Recommended feature image size: 1200x630px
- Maximum file size: 300KB for feature images, 150KB for in-content images

## Example Structure

```
blog-images/
├── getting-started-with-react/
│   ├── feature.webp
│   ├── code-example.png
│   └── react-architecture.jpg
├── top-movies-2023/
│   ├── feature.webp
│   ├── movie-1.jpg
│   └── movie-2.jpg
```
