import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'Mohammad Talib Uddin | Backend Engineer - Java & Python',
  description:
    'Mohammad Talib Uddin — Backend Engineer specializing in Java Spring Boot and Python Django. Building scalable APIs, microservices, and production-grade systems.',

  keywords:
    'Mohammad Talib Uddin, Talib Uddin, backend engineer, Java developer, Spring Boot, Python, Django, microservices, REST APIs, software engineer India',

  authors: [{ name: 'Mohammad Talib Uddin' }],
  creator: 'Mohammad Talib Uddin',
  publisher: 'Mohammad Talib Uddin',

  verification: {
    google: 'LQTWzEDTeyvrVVSbR18Yd1Ms_vPuZLkg3nukb7yq8JQ',
  },

  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dz-txlib.github.io',
    title: 'Mohammad Talib Uddin | Backend Engineer',
    description:
      'Backend Engineer specializing in Java Spring Boot and Python Django REST Framework. Building scalable APIs and microservices.',
    siteName: 'Mohammad Talib Uddin Portfolio',

    images: [
      {
        url: 'https://dz-txlib.github.io/profile12.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Talib Uddin - Backend Engineer specializing in Java and Python',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Talib Uddin | Backend Engineer',
    description:
      'Backend Engineer specializing in Java Spring Boot and Python Django REST Framework.',

    images: ['https://dz-txlib.github.io/profile12.png'],
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
    canonical: 'https://dz-txlib.github.io',
  },

  other: {
    google: 'notranslate',
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "name": "Mohammad Talib Uddin",

    "alternateName": [
      "Talib Uddin",
      "Talib"
    ],

    "url": "https://dz-txlib.github.io",

    "image": "https://dz-txlib.github.io/profile12.png",

    "jobTitle": "Backend Engineer",

    "description":
      "Backend Engineer specializing in Java Spring Boot and Python Django REST Framework. Building scalable APIs and microservices.",

    "sameAs": [
      "https://www.linkedin.com/in/dz-txlib/",
      "https://github.com/mohammadtalibuddin",
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
      "Redis",
      "Docker",
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
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "name": "Mohammad Talib Uddin Portfolio",

    "url": "https://dz-txlib.github.io",

    "description":
      "Portfolio of Mohammad Talib Uddin, Backend Engineer specializing in Java and Python."
  };

  return (
    <html lang="en" translate="no" className="notranslate">
      <head>
        <meta name="google" content="notranslate" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
        translate="no"
      >
        {children}
      </body>
    </html>
  );
}
