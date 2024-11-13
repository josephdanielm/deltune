// app/components/TopTracks.tsx

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTopTracks } from "@/lib/spotify";
import Image from "next/image";

type Track = {
  title: string;
  artist: string;
  url: string;
  coverImage: {
    url: string;
    width: number;
    height: number;
  };
};

export async function fetchTopTracks(): Promise<Track[]> {
  return await getTopTracks();
}

type TopTracksProps = {
  tracks: Track[];
};

export default function TopTracks({ tracks }: TopTracksProps) {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Top Tracks</h2>
      <Carousel className="relative w-full">
        <CarouselPrevious className="absolute left-0 top-1/2 transform  z-10">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform z-10">
          Next
        </CarouselNext>

        <CarouselContent className="p-16">
          {tracks.map((track) => (
            <CarouselItem key={track.url} className="basis-1/3">
              <a href={track.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={track.coverImage.url}
                  alt={`${track.title} cover`}
                  width={track.coverImage.width}
                  height={track.coverImage.height}
                  placeholder="blur"
                  blurDataURL={track.coverImage.url}
                  className="rounded-lg"
                />
                <div className="mt-2 text-center">
                  <p className="text-lg font-medium">{track.title}</p>
                  <p className="text-sm text-gray-500">{track.artist}</p>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
