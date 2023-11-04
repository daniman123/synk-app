export interface IMediaPreviewItem {}

const MediaPreviewItem = () => (
  <div className="mt-3 grid h-[87%] grid-rows-6">
    <div className="bg-white row-span-4 rounded-lg"></div>
    <div className="row-span-2 grid grid-cols-12 grid-rows-2">
      <p className="truncate text-xs col-span-2 col-start-2 col-end-10 row-start-1">
        title
      </p>
      <p className="truncate text-xs col-span-2 col-start-2 col-end-10 row-start-2">
        name
      </p>
      <p className="text-xs col-span-3 row-start-1 col-start-10">views</p>
    </div>
  </div>
);

export default MediaPreviewItem;
