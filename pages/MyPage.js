// import { useState } from 'react';

// const MyPage = () => {
//     const { page, setPage } = useState("posts");

//     const handleToggle = () => {
//         setPage( page == "posts" ? "likes" : "posts");
//     };

//     return (
//         <div>
//             <h1>ユーザーページ</h1>
//             <div>
//                 {/* ユーザーのアイコンとユーザーネーム */}
//                 <div>
//                 {/* ユーザーのアイコン */}
//                 {/* ユーザーネーム */}
//                 </div>
//             </div>
//             <div>
//                 {/* ページ切り替えトグル */}
//                 <button onClick={handleToggle}>
//                 {page === "posts" ? "自分の投稿" : "いいねしたもの"}
//                 を表示する
//                 </button>
//             </div>
//             <div>
//                 {/* ページの中身 */}
//                 {page === "posts" ? (
//                 <div>
//                     {/* 自分の投稿を表示するページのコンテンツ */}
//                 </div>
//                 ) : (
//                 <div>
//                     {/* いいねしたものを表示するページのコンテンツ */}
//                 </div>
//                 )}
//             </div>
//         </div>
//         );
//     };

// export default MyPage;