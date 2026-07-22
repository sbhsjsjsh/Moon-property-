import React from 'react';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.moonproperty.com/#website",
        "url": "https://www.moonproperty.com/",
        "name": "Moon Property",
        "description": "Trusted Real Estate Agency in Sihi, Gurugram. Find verified flats, plots, apartments, and commercial properties.",
        "publisher": {
          "@id": "https://www.moonproperty.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.moonproperty.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
        "@id": "https://www.moonproperty.com/#organization",
        "name": "Moon Property",
        "url": "https://www.moonproperty.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.moonproperty.com/#logo",
          "url": "https://www.moonproperty.com/icon.png",
          "caption": "Moon Property Logo",
          "width": "512",
          "height": "512"
        },
        "image": {
          "@id": "https://www.moonproperty.com/#logo"
        },
        "description": "Premium real estate consultant and property dealer specializing in Sihi, Sector 81, Sector 82, Sector 83, New Gurgaon, and Dwarka Expressway. We offer services to buy, sell, and rent residential and commercial properties.",
        "telephone": "+91-0000000000",
        "email": "contact@moonproperty.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Moon Property Office, Sihi",
          "addressLocality": "Gurugram",
          "addressRegion": "Haryana",
          "postalCode": "122004",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.3845",
          "longitude": "76.9532"
        },
        "areaServed": [
          {
            "@type": "Place",
            "name": "Sihi, Gurugram"
          },
          {
            "@type": "Place",
            "name": "Sector 81, Gurugram"
          },
          {
            "@type": "Place",
            "name": "Sector 82, Gurugram"
          },
          {
            "@type": "Place",
            "name": "Sector 83, Gurugram"
          },
          {
            "@type": "Place",
            "name": "New Gurgaon"
          },
          {
            "@type": "Place",
            "name": "Dwarka Expressway"
          },
          {
            "@type": "Place",
            "name": "Sohna Road"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://www.facebook.com/moonproperty",
          "https://www.instagram.com/moonproperty",
          "https://www.linkedin.com/company/moonproperty"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Real Estate Services",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Buy Property",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Residential Property for Sale"
                },
                {
                  "@type": "Service",
                  "name": "Commercial Property for Sale"
                },
                {
                  "@type": "Service",
                  "name": "Flats and Apartments"
                },
                {
                  "@type": "Service",
                  "name": "Builder Floors"
                },
                {
                  "@type": "Service",
                  "name": "Luxury Villas"
                },
                {
                  "@type": "Service",
                  "name": "Plots and Land"
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Sell Property",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Property Valuation"
                },
                {
                  "@type": "Service",
                  "name": "Property Listing and Marketing"
                }
              ]
            },
            {
              "@type": "OfferCatalog",
              "name": "Rent Property",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Residential Rentals"
                },
                {
                  "@type": "Service",
                  "name": "Commercial Rentals"
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.moonproperty.com/#webpage",
        "url": "https://www.moonproperty.com/",
        "name": "Moon Property Sihi Gurugram | Trusted Real Estate in Sihi",
        "description": "Find verified flats, plots, apartments, and commercial properties in Sihi, Gurugram with Moon Property.",
        "isPartOf": {
          "@id": "https://www.moonproperty.com/#website"
        },
        "about": {
          "@id": "https://www.moonproperty.com/#organization"
        }
      },
      {
        "@type": "ContactPage",
        "@id": "https://www.moonproperty.com/about#webpage",
        "url": "https://www.moonproperty.com/about",
        "name": "Contact Moon Property",
        "isPartOf": {
          "@id": "https://www.moonproperty.com/#website"
        }
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.moonproperty.com/buy#webpage",
        "url": "https://www.moonproperty.com/buy",
        "name": "Buy Property in Gurugram",
        "isPartOf": {
          "@id": "https://www.moonproperty.com/#website"
        },
        "about": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Residence",
                "name": "Modern Minimalist Villa in Sihi",
                "url": "https://www.moonproperty.com/property/1",
                "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Apartment",
                "name": "Luxury Apartment on Dwarka Expressway",
                "url": "https://www.moonproperty.com/property/2",
                "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Product",
                "name": "Premium Commercial Plot",
                "url": "https://www.moonproperty.com/property/6",
                "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.moonproperty.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Moon Property located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Moon Property is a premier real estate agency located in Sihi, Gurugram. We serve clients across Sector 81, 82, 83, New Gurgaon, and Dwarka Expressway."
            }
          },
          {
            "@type": "Question",
            "name": "What types of properties do you deal in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We deal in residential and commercial properties, including flats, luxury apartments, builder floors, villas, and plots in Gurugram."
            }
          },
          {
            "@type": "Question",
            "name": "Is Sector 81 Gurugram a good place to invest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Sector 81 is a highly sought-after location in New Gurgaon due to its excellent connectivity, proximity to NH-48, and premium residential projects."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with renting properties in Gurugram?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! We assist tenants in finding the best rental flats and apartments, and help landlords find verified tenants."
            }
          },
          {
            "@type": "Question",
            "name": "How can I verify a property before buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our team at Moon Property conducts strict legal and background checks on all listings to ensure they are 100% verified and litigation-free."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.moonproperty.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.moonproperty.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Buy Property",
            "item": "https://www.moonproperty.com/buy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Rent Property",
            "item": "https://www.moonproperty.com/rent"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Sell Property",
            "item": "https://www.moonproperty.com/sell"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "About Us",
            "item": "https://www.moonproperty.com/about"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
