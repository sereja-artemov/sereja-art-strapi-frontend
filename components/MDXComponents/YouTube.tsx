'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface YouTubeProps {
  id: string,
  title: string,
}

export default function YouTube({ id,  title }:YouTubeProps) {
  return (
    <LiteYouTubeEmbed id={id} title={title} />
  );
}