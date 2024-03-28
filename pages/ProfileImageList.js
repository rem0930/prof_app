import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const ProfileImageList = () => {
    const [userName, setUserName] = useState("");
    const imageNames = [
        '01.png',
        '02.png',
        '03.png',
        '04.png',
        '05.png',
        '06.png',
        '07.png',
        '08.png',
        '09.png',
    ];

    const handleImageSelect = async (imageName) => {
        const confirmMessage = 'この画像でよろしいですか？';
        if (window.confirm(confirmMessage)) {
            const userProfileData = {
                user: {
                    user_name: userName,
                    profile_image: `/images/${imageName}`
                }
            };

            try {
                const response = await fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userProfileData),
                });

                const data = await response.json();
                console.log('APIレスポンス:', data);
                alert("画像が選択されました!");
            } catch (error) {
                console.error('エラー:', error);
                alert('画像の選択に失敗しました');
            }
        }
    };

    return (
        <div className="profile-image-list">
            <h2>プロフィール画像を選択してください</h2>
            <div>
                <input
                    type="text"
                    placeholder="ユーザー名を入力してください"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} // ユーザー名の入力を受け付ける
                />
            </div>
            <div className={styles["grid-container"]}>
                {imageNames.map((imageName, index) => (
                    <div className={styles["grid-item"]} key={index} onClick={() => handleImageSelect(imageName)}>
                        <Link href="/">
                                <img
                                    src={`/images/${imageName}`}
                                    alt={`プロフィール画像 ${index + 1}`}
                                    style={{ maxWidth: "50%", borderRadius: '50%'}}
                                />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileImageList;