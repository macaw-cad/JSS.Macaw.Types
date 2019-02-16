export const youtubeSettings = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1,
        controls: 0,
        cc_load_policy: 0,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
    }
}

export const getVideoId = (videoUrl: string) => {
    const regExResult = videoUrl.match(/[^\/=]+$/);
    const videoId = (regExResult) ? regExResult[0] : undefined;

    return videoId;
}