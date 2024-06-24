import MainHeader from "@/components/header/header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

// 한 페이지 이상의 셸을 정의하는 파일
// 하나의 layout 파일이 app 폴더 상단에 필요하다.
// 중첩된 layout.js 파일도 가질 수 있다.
// -> 그래서 about 폴더에 layout.tsx 파일을 만들어서 중첩된 레이아웃을 만들 수 있다.

// children은 페이지 컨텐츠를 나타낸다.

// icon.png를 사용하면 favicon으로 사용할 수 있다.
