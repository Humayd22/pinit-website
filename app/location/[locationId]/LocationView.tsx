'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Location {
  id: string;
  location_name: string;
  business_name: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  user_notes: string | null;
  google_maps_link: string | null;
  photos: string[] | null;
  is_shared: boolean;
  user_rating: number | null;
  google_rating: number | null;
  google_review_count: number | null;
  price_range: string | null;
  meal_type: string[] | null;
  noise_level: string | null;
  place_type: string | null;
  category_id: string | null;
}

interface LocationViewProps {
  location: Location;
  categoryName?: string;
}

export default function LocationView({ location, categoryName }: LocationViewProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [appOpened, setAppOpened] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (mobile && !appOpened) {
      // Try to open the app
      const appUrl = `pinit://location/${location.id}`;
      window.location.href = appUrl;
      setAppOpened(true);
    }
  }, [location.id, appOpened]);

  const displayName = location.business_name || location.location_name;

  return (
    <div className="min-h-screen bg-white pb-40 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 overscroll-none">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-5 flex items-center">
          <Link href="/" className="text-gray-900 hover:text-gray-700 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 256 256" fill="currentColor">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-6">
        {/* Photo Section */}
        <div className="mb-6">
          {location.photos && location.photos.length > 0 ? (
            <>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: '21/9' }}>
                <Image
                  src={location.photos[0]}
                  alt={displayName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Carousel dots */}
              {location.photos.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {location.photos.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-[#0E192B]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full py-8 flex items-center justify-center">
              <Image
                src="/icon.svg"
                alt="Pin!t"
                width={60}
                height={60}
                className="opacity-30"
              />
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* Address */}
          {location.address && (
            <div>
              <div className="text-[17px] text-[#0E192B] font-normal leading-snug">
                {location.address}
              </div>
              {location.city && (
                <div className="text-[15px] text-[#69778C] mt-1">
                  {location.city}
                </div>
              )}
            </div>
          )}

          {/* Name of location */}
          <div>
            <div className="text-[15px] text-[#0E192B] font-normal mb-1">
              Name of location
            </div>
            <div className="text-[15px] text-[#69778C]">
              {displayName}
            </div>
          </div>

          {/* Location category */}
          {categoryName && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Location category
              </div>
              <div className="text-[15px] text-[#69778C]">
                {categoryName}
              </div>
            </div>
          )}

          {/* Rating */}
          {location.user_rating && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Rating
              </div>
              <div className="text-[15px] text-[#69778C]">
                {location.user_rating}
              </div>
            </div>
          )}

          {/* Price Range */}
          {location.price_range && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Price Range
              </div>
              <div className="text-[15px] text-[#69778C]">
                {location.price_range}
              </div>
            </div>
          )}

          {/* Meal Type */}
          {location.meal_type && location.meal_type.length > 0 && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Meal Type
              </div>
              <div className="text-[15px] text-[#69778C]">
                {location.meal_type.join(', ')}
              </div>
            </div>
          )}

          {/* Noise Level */}
          {location.noise_level && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Noise Level
              </div>
              <div className="text-[15px] text-[#69778C]">
                {location.noise_level}
              </div>
            </div>
          )}

          {/* Notes */}
          {location.user_notes && (
            <div>
              <div className="text-[15px] text-[#0E192B] font-normal mb-1">
                Notes
              </div>
              <div className="text-[15px] text-[#69778C] leading-relaxed">
                {location.user_notes}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-3">
        <div className="max-w-3xl mx-auto">
          {/* Get Directions */}
          {location.google_maps_link && (
            <a
              href={location.google_maps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-[#0E192B] text-white border-2 border-[#0E192B] rounded-[14px] font-medium text-[17px] hover:bg-[#1a2738] transition-colors"
            >
              Get directions
            </a>
          )}

          {/* Download Pin!t */}
          <button
            onClick={() => {
              if (isMobile) {
                // Try to open app
                window.location.href = `pinit://location/${location.id}`;
                // Fallback to app store after delay
                setTimeout(() => {
                  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                  const isAndroid = /Android/i.test(navigator.userAgent);

                  if (isIOS) {
                    window.location.href = 'https://apps.apple.com/us/app/pin-t/id6772275587';
                  } else if (isAndroid) {
                    window.location.href = 'https://play.google.com/store/apps/details?id=com.pinit.mobile';
                  } else {
                    window.location.href = '/';
                  }
                }, 1500);
              } else {
                // Desktop: link to website
                window.location.href = '/';
              }
            }}
            className="block w-full text-center px-6 py-4 bg-white text-[#0E192B] border-2 border-[#0E192B] rounded-[14px] font-medium text-[17px] hover:bg-gray-50 transition-colors mt-3"
          >
            Download Pin!t
          </button>
        </div>
      </div>
    </div>
  );
}
