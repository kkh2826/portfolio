function Voxel() {
  return (
    <model-viewer
      src="/voxel/kh.gltf"
      camera-controls
      autoplay
      auto-rotate
      shadow-intensity="2.5"
      shadow-softness="1"
      alt="Voxel Avatar"
      camera-orbit="150deg 65deg 130%"
      environment-image="neutral"
      interaction-prompt="none"
      min-field-of-view="10deg"
      max-field-of-view="130deg"
      max-camera-orbit="Infinity 180deg auto"
      min-camera-orbit="-Infinity 0deg auto"
      interpolation-decay="30"
      auto-rotate-delay="0"
      exposure="1"
      style={{
        width: "600px",
        height: "600px",
      }}
    />
  );
}

export default Voxel;
