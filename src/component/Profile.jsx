import React from "react";

const Profile = () => {
  return (
    <div className="flex-col flex bg-red-500 h-128">
      <div className="flex h-3/5 bg-yellow-500">
        <div className="flex justify-center items-center w-1/3 bg-green-500">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://placeimg.com/192/192/people"
                alt="profile_img"
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-pink-500">
          <div className="flex justify-end h-2/5">
            <div className="text-2xl font-light mr-auto mt-2 ml-4">SBS07</div>
            <button className="btn btn-sm mt-2 mr-4">메시지 보내기</button>
            <button className="btn btn-sm mt-2 mr-4">팔로우</button>
          </div>
          <div className="h-1/5"></div>
          <div className="h-2/5"></div>
        </div>
      </div>

      <div className="bg-blue-500 h-2/5">스토리</div>
    </div>
  );
};

export default Profile;
