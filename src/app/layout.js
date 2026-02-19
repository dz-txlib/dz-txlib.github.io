import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.js

export const metadata = {
  title: 'Mohammad Talib Uddin | Software Engineer - Backend Developer',
  description: 'Mohammad Talib Uddin (Talib Uddin) - Software Engineer specializing in backend development with Java Spring Boot and Python Django. Experienced developer building scalable APIs and microservices in Bhopal, India.',
  keywords: 'Mohammad Talib Uddin, Talib Uddin, Talib, software engineer, backend developer, Java developer, Spring Boot developer, Python developer, Django developer, software developer India, Bhopal software engineer',
  authors: [{ name: 'Mohammad Talib Uddin' }],
  creator: 'Mohammad Talib Uddin',
  publisher: 'Mohammad Talib Uddin',

  // Optional: Explicit icon configuration
  // Icon configuration - SVG only
  icons: {
    icon: '/icon.svg',
    icon: '/icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talibuddin.me',
    title: 'Mohammad Talib Uddin | Software Engineer - Backend Developer',
    description: 'Software Engineer specializing in backend development with Java Spring Boot and Python Django REST Framework',
    siteName: 'Mohammad Talib Uddin Portfolio',
    images: [{
      url: 'https://talibuddin.me/profile2.png',
      width: 1200,
      height: 630,
      alt: 'Mohammad Talib Uddin - Software Engineer',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://talibuddin.me',
  },
  other: {
    'google': 'notranslate',
  },
}

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Talib Uddin",
    "alternateName": ["Talib Uddin", "Talib"],
    "url": "https://talibuddin.me",
    "image": "https://talibuddin.me/profile12.png",
    "jobTitle": "Software Engineer",
    "description": "Backend Developer specializing in Java Spring Boot and Python Django REST Framework. Building scalable APIs and microservices.",
    "sameAs": [
      "https://www.linkedin.com/in/dz-txlib/",
      "https://github.com/mohammadtalibuddin",
      "https://www.instagram.com/dz_txlib"
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Python",
      "Django REST Framework",
      "Backend Development",
      "Microservices",
      "RESTful APIs",
      "MySQL",
      "PostgreSQL",
      "DevOps",
      "AWS"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Affy Cloud IT Solutions"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SAM College of Engineering and Technology"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhopal",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "email": "talib.uddin626@gmail.com",
    "telephone": "+91-7725050626"
  };

  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://talibuddin.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        translate="no"
      >
        {children}
      </body>
    </html>
  );
}


// export const metadata = {
//   title: "Mohammad Talib Uddin - Software Engineer",
//   description: "Portfolio of Mohammad Talib Uddin, a Software Engineer specializing in backend development with Java (Spring Boot) and Python (Django REST Framework).",
//   keywords: "Mohammad Talib Uddin, Talib Uddin, Talib, Software Developer, Software Engineer, Backend Developer, Java, Spring Boot, Python, Django, RESTful APIs, AWS, Portfolio,",
//   author: "Mohammad Talib Uddin",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
