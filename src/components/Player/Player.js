import ReactPlayer from 'react-player'

export default function Player() {
    return (
        <ReactPlayer controls={true} key="file" url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"/>
    );
}