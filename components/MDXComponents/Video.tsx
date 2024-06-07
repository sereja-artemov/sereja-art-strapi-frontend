export default function Video({ url, figcaption, poster }: { url: string, figcaption: string, poster: string }) {
  const baseUrl = url.substring(0, url.lastIndexOf('.')) || url;

  return (
    <figure>
      <video loop autoPlay muted playsInline poster={poster} preload="none">
        <source src={`${baseUrl}.webm`} type="video/webm" />
        <source src={url} type="video/mp4" />
        Ваш браузер не поддерживает встроенные видео.
      </video>
      {figcaption && <figcaption className="text-center">{figcaption}</figcaption>}
    </figure>
  );
}
