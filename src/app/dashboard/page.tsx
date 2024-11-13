import TopTracks, {
  fetchTopTracks,
} from "@/app/dashboard/_components/top-tracks";

export default async function Page() {
  const tracks = await fetchTopTracks();

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-zinc-900/50" />
          <div className="aspect-video rounded-xl bg-zinc-900/50" />
          <div className="aspect-video rounded-xl bg-zinc-900/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-zinc-900/50 md:min-h-min">
          <TopTracks tracks={tracks} />
        </div>
      </div>
    </>
  );
}
