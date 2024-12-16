import { CalendarIcon } from "../ui/icon";

const AlbumCreate = () => {
  return (
    <>
      <div className=" bg-baseColor grid h-screen p-10">
        <div className="flex">
          <div className="bg-accentColor h-12 w-52 rounded-tl-lg mr-12 flex items-center p-2">
            <CalendarIcon />
          </div>
          <div className="bg-accentColor h-12 w-96 rounded-tl-lg"></div>
        </div>
      </div>
    </>
  );
};

export default AlbumCreate;
