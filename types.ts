
export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface LoveLetter {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface AppState {
  photos: MemoryPhoto[];
  letters: LoveLetter[];
}
