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
        <div className="header-background">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#59453c", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#8f3a09", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#gradient)"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
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
