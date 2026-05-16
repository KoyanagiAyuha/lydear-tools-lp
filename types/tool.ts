export interface Tool {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  icon: string;
  logo?: string; // ロゴ画像パス（オプション）
  color: string;
  features: string[];
  status: "released" | "coming-soon";
  releaseDate?: string;
}
