import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="flex-col flex  h-128">
      <div className="flex h-3/5 ">
        <div className="flex justify-center items-center w-1/3 ">
          <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 ">
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
            <div className=" h-16 ">
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
          <div className="h-2/5">
            <div className=" font-bold m-0 py-1">풀스택 A조</div>
            <div className=" py-1">instagram</div>
            <div className="font-bold text-blue-900 mt-1">
              <a href="https://github.com/hyelim3">github.com/hyelim3</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center  h-1/5">
        <div class="avatar ">
          <div class=" relative w-20 rounded-full ring ring-offset-base-100 ring-offset-2">
            <a href="">
              <img src="https://i.picsum.photos/id/1038/3914/5863.jpg?hmac=SGtXryWDkn_eVQdA1NjYrikcsrIfcfS4SFYHo4lCpkQ" />
            </a>
          </div>
        </div>
        <div class="avatar">
          <div class="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
            <a href="">
              <img src="https://i.picsum.photos/id/1043/5184/3456.jpg?hmac=wsz2e0aFKEI0ij7mauIr2nFz2pzC8xNlgDHWHYi9qbc" />
            </a>
          </div>
        </div>
        <div class="avatar">
          <div class=" w-20 rounded-full ring ring-offset-base-100 ring-offset-2">
            <a href="">
              <img src="https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8" />
            </a>
          </div>
        </div>
        <div class="avatar">
          <div class=" w-20 rounded-full ring ring-offset-base-100 ring-offset-2">
            <a href="">
              <img src="https://i.picsum.photos/id/164/1200/800.jpg?hmac=wkqGUkaeW3kiAsHq_VwxSWWossIMAwFV4eUfFzuDkew" />
            </a>
          </div>
        </div>
        <div class="avatar">
          <div class="  mr-16 w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
            <a href="">
              <img src="https://i.picsum.photos/id/120/4928/3264.jpg?hmac=i-8mkfKj_gRyQt9ZJVhbIBXbtIBNcsbI_gwNe_39vus" />
            </a>
          </div>
        </div>
      </div>
      <div class="tabs flex justify-center mt-9">
        <a class="tab tab-bordered ">게시글</a>
        <a class="tab tab-bordered tab-active">태그 됨</a>
      </div>
    </div>
  );
};

export default Profile;
