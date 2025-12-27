# Google Analytics Setup Guide

## How to Enable Google Analytics

1. **Get your Google Analytics ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Enable Google Analytics in the code:**
   - Open `src/components/general/BaseHead.astro`
   - Find the commented Google Analytics section
   - Replace `G-XXXXXXXXXX` with your actual Google Analytics ID
   - Uncomment the script tags

3. **Example:**
   ```html
   <!-- Google Analytics (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
   <script is:inline>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-ABC123XYZ', {
       'page_path': window.location.pathname,
       'anonymize_ip': true
     });
   </script>
   ```

4. **Verify it's working:**
   - Deploy your site
   - Visit your site and navigate through pages
   - Check Google Analytics Real-Time reports to see if visits are being tracked

## SEO Optimizations Already Implemented

✅ **Meta Tags:**
- Optimized title and description for "DR software developer" and "web application" searches
- Comprehensive keywords including Dominican Republic-specific terms
- Open Graph tags for social media sharing
- Twitter Card tags

✅ **Structured Data (JSON-LD):**
- Person schema with professional information
- Credentials and certifications
- Geographic location (Dominican Republic)
- Skills and expertise

✅ **Technical SEO:**
- Canonical URLs
- Robots.txt file
- Proper meta robots tags
- Geographic meta tags (DO region)

✅ **Content Optimization:**
- SEO-optimized descriptions
- Location-specific keywords
- Technology-specific keywords

## Next Steps for Better Rankings

1. **Content:**
   - Add a blog section with articles about software development in DR
   - Create case studies for your projects
   - Add testimonials from clients

2. **Backlinks:**
   - Get listed on Dominican Republic tech directories
   - Share on LinkedIn, Twitter, and other social platforms
   - Collaborate with other DR developers

3. **Local SEO:**
   - Create a Google Business Profile (if applicable)
   - Get listed on Dominican Republic business directories
   - Add location-specific content

4. **Performance:**
   - Ensure fast page load times
   - Optimize images
   - Use proper caching strategies

5. **Regular Updates:**
   - Keep content fresh and updated
   - Add new projects regularly
   - Update certifications and skills

