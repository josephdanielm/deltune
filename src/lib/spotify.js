const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 86400,
    },
  });

  const { items } = await response.json();

  return items.slice(0, 5).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    url: track.external_urls.spotify,
    coverImage: track.album.images[1],
  }));
};
