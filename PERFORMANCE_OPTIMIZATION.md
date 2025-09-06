# Performance Optimization Guide

## 🚀 Core Web Vitals Optimization

### 1. Largest Contentful Paint (LCP) - Target: < 2.5s

**Current Optimizations:**
- ✅ Using Next.js Image component for optimization
- ✅ Implementing lazy loading for images
- ✅ Using WebP format for images
- ✅ Preloading critical resources

**Additional Optimizations:**
```javascript
// In layout.tsx - Add preload for critical fonts
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

// In Hero component - Optimize hero image
<Image
  src="/hamza.png"
  alt="Ameer Hamza - Full Stack Developer"
  width={192}
  height={192}
  priority // Add priority for above-the-fold images
  className="object-cover rounded-full"
/>
```

### 2. First Input Delay (FID) - Target: < 100ms

**Current Optimizations:**
- ✅ Using client-side components efficiently
- ✅ Minimizing JavaScript bundles
- ✅ Using React hooks properly

**Additional Optimizations:**
```javascript
// Use dynamic imports for non-critical components
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div>Loading...</div>,
  ssr: false
})

// Optimize event handlers
const handleClick = useCallback(() => {
  // Handle click
}, [])
```

### 3. Cumulative Layout Shift (CLS) - Target: < 0.1

**Current Optimizations:**
- ✅ Setting image dimensions
- ✅ Using CSS Grid/Flexbox for stable layouts
- ✅ Avoiding dynamic content insertion

**Additional Optimizations:**
```css
/* Reserve space for dynamic content */
.project-card {
  min-height: 400px; /* Reserve space */
  aspect-ratio: 16/9; /* Maintain aspect ratio */
}

/* Prevent layout shifts */
.image-container {
  width: 100%;
  height: 300px; /* Fixed height */
  position: relative;
}
```

## 📱 Mobile Performance

### Responsive Images
```javascript
// Use responsive images with different sizes
<Image
  src="/hero-image.jpg"
  alt="Hero background"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
  className="object-cover"
/>
```

### Touch Optimization
```css
/* Ensure touch targets are at least 44px */
.button {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}

/* Optimize scrolling */
.smooth-scroll {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
```

## 🗜️ Asset Optimization

### Image Optimization
```javascript
// Use Next.js Image with proper optimization
<Image
  src="/project-screenshot.png"
  alt="Project screenshot"
  width={800}
  height={600}
  quality={85} // Optimize quality
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Font Optimization
```javascript
// In layout.tsx - Optimize font loading
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent font blocking
  preload: true,
  fallback: ['system-ui', 'arial']
})
```

### CSS Optimization
```css
/* Use CSS containment for better performance */
.project-card {
  contain: layout style paint;
}

/* Optimize animations */
.animate-float {
  will-change: transform;
  transform: translateZ(0); /* Force hardware acceleration */
}
```

## 🔧 Bundle Optimization

### Code Splitting
```javascript
// Split components by route
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div>Loading About...</div>
})

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div>Loading Projects...</div>
})
```

### Tree Shaking
```javascript
// Import only what you need
import { useState, useEffect } from 'react' // ✅ Good
import * as React from 'react' // ❌ Bad

// Import specific icons
import { Sun, Moon } from 'lucide-react' // ✅ Good
import * as Icons from 'lucide-react' // ❌ Bad
```

## 🗄️ Caching Strategy

### Browser Caching
```javascript
// In next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

### Service Worker (PWA)
```javascript
// Create service worker for caching
// public/sw.js
const CACHE_NAME = 'portfolio-v1'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/hamza.png'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})
```

## 📊 Performance Monitoring

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lhci:
    name: Lighthouse
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
```

### Web Vitals Monitoring
```javascript
// In _app.tsx or layout.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric)
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

## 🎯 Performance Checklist

### Before Deployment
- [ ] Optimize all images (WebP format)
- [ ] Minify CSS and JavaScript
- [ ] Enable gzip compression
- [ ] Set up browser caching
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize font loading
- [ ] Implement lazy loading
- [ ] Test loading performance

### Ongoing Monitoring
- [ ] Monitor Core Web Vitals weekly
- [ ] Check bundle size monthly
- [ ] Review performance metrics
- [ ] Optimize based on user data
- [ ] Update dependencies regularly
- [ ] Test on different devices
- [ ] Monitor error rates
- [ ] Track user experience metrics

## 🛠️ Tools & Resources

### Performance Tools
1. **Lighthouse** - Built-in Chrome DevTools
2. **WebPageTest** - Detailed performance analysis
3. **GTmetrix** - Performance monitoring
4. **PageSpeed Insights** - Google's tool
5. **Bundle Analyzer** - Analyze bundle size

### Optimization Libraries
1. **next-bundle-analyzer** - Bundle analysis
2. **@next/bundle-analyzer** - Next.js bundle analysis
3. **web-vitals** - Core Web Vitals measurement
4. **lighthouse-ci** - Automated testing

### Best Practices
1. **Use Next.js Image component** for automatic optimization
2. **Implement lazy loading** for below-the-fold content
3. **Minimize JavaScript bundles** with code splitting
4. **Optimize fonts** with display: swap
5. **Use CSS containment** for better performance
6. **Implement service worker** for caching
7. **Monitor Core Web Vitals** regularly
8. **Test on real devices** not just desktop

---

**Remember**: Performance is a feature, not an afterthought. Always prioritize user experience and loading speed in your development process.
