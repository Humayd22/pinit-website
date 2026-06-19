import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import LocationView from './LocationView';

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

async function getLocation(locationId: string): Promise<{ location: Location; categoryName: string | null } | null> {
  const { data, error } = await supabase
    .from('locations')
    .select(`
      *,
      categories (
        name
      )
    `)
    .eq('id', locationId)
    .eq('is_shared', true)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    location: data as Location,
    categoryName: data.categories?.name || null
  };
}

export async function generateMetadata({
  params,
}: {
  params: { locationId: string };
}): Promise<Metadata> {
  const result = await getLocation(params.locationId);

  if (!result) {
    return {
      title: 'Location Not Found | Pin!t',
    };
  }

  const { location } = result;
  const title = `${location.location_name}${location.city ? ` in ${location.city}` : ''} | Pin!t`;
  const description = location.user_notes
    ? location.user_notes.slice(0, 160)
    : `Check out ${location.location_name} on Pin!t`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: location.photos?.[0] ? [location.photos[0]] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: location.photos?.[0] ? [location.photos[0]] : [],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: { locationId: string };
}) {
  const result = await getLocation(params.locationId);

  if (!result) {
    notFound();
  }

  return <LocationView location={result.location} categoryName={result.categoryName || undefined} />;
}
