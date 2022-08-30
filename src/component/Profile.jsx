import React from "react";

const Profile = () => {
  return (
    <div className="flex-col flex bg-red-500 h-128">
      <div className="flex h-3/5 bg-yellow-500">
        <div className="flex justify-center items-center w-1/3 bg-green-500">
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-pink-500">
          <div className="flex justify-end items-center h-2/5">
            <div className="text-2xl font-light mr-auto mt-2">SBS0712</div>
            <button className="rounded-md border-gray-400 bg-white text-black hover:bg-white text-black hover:rounded-md hover:border-gray-400 btn btn-sm mt-2 mr-4">
              메시지 보내기
            </button>
            <button className="rounded-md border-gray-400 bg-white text-black hover:bg-white text-black hover:rounded-md hover:border-gray-400 btn btn-sm mt-2 mr-4">
              팔로우
            </button>
            <button className="mr-auto flex justify mt-4">
              <i class="fi fi-bs-menu-dots"></i>
            </button>
          </div>

          <div className="h-1/5">
            <div className="bg-yellow-500 h-16 flex items-center ">
              <a href="" className="mr-20">
                게시물
              </a>
              <a href="" className="mr-20">
                팔로워
              </a>
              <a href="" className="mr-20">
                팔로우
              </a>
            </div>
          </div>
          <div className="h-1/4">
            <div className="bg-green-500 font-bold m-0 p-1">풀스택 A조</div>
            <div className="bg-blue-500 p-1">instagram</div>
            <a
              className="font-bold text-blue-900 p-1"
              href="https://github.com/hyelim3"
            >
              github.com/hyelim3
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 flex justify-around items-center h-2/5">
        <div class="avatar ">
          <div class=" mr-16 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>

        <div class="avatar">
          <div class="mr-16 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div class="avatar">
          <div class="mr-16 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div class="avatar">
          <div class="mr-16 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
