# Đưa portfolio lên Firebase Hosting

Dự án đã có cấu hình `firebase.json`. Firebase sẽ dựng website bằng `npm run build`, rồi xuất bản thư mục `dist`.

## 1. Tạo hoặc chọn dự án Firebase

Mở [Firebase Console](https://console.firebase.google.com/) bằng tài khoản Google của bạn và tạo hoặc chọn một dự án Firebase.

Bạn có thể chọn Project ID `pham-van-tu-portfolio-wq` nếu tên này còn trống. Đây là tên đề xuất, chưa phải một dự án đã được tạo. Ghi lại Project ID thực tế trong phần cài đặt dự án.

## 2. Xuất bản từ Google Cloud Shell

Mở [Google Cloud Shell](https://shell.cloud.google.com/) bằng cùng tài khoản. Cloud Shell có sẵn Firebase CLI và sử dụng tài khoản Google đang đăng nhập.

Chạy các lệnh sau trong một thư mục chưa có bản sao `PortifolioCV`:

```bash
git clone https://github.com/vantu242006-wq/PortifolioCV.git
cd PortifolioCV
npm ci
firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

Thay `YOUR_FIREBASE_PROJECT_ID` bằng Project ID thực tế. Tài khoản đăng nhập cần có quyền triển khai Hosting của dự án đó. Không cần chạy lại `firebase init`: cấu hình Hosting đã được chuẩn bị.

Khi triển khai thành công, Firebase CLI sẽ in đường dẫn website. Với site mặc định, địa chỉ có dạng `PROJECT_ID.web.app`. Chỉ sử dụng đường dẫn được xác nhận trong kết quả triển khai.

## 3. Cập nhật những lần sau

Trong thư mục `PortifolioCV`, chạy:

```bash
git pull --ff-only
npm ci
firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

## Tài liệu chính thức

- [Bắt đầu với Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)
- [Firebase CLI](https://firebase.google.com/docs/cli)
