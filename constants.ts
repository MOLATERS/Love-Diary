
import { MemoryPhoto, LoveLetter } from './types';

export const INITIAL_PHOTOS: MemoryPhoto[] = [
  {
    id: '1',
    url: 'https://cloud.on-u.cn/file-plus/one-drive/url?shareId=u%21aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8wMjdiMDY5N2FjYTA1NjcyL0lRQ016QUh0SUw4QlQ2Uld4VlhtV0tCdEFmd3RPR2dreVhrdmVpWHgxNVJ2bGJJ&u=f8c1f38d4883c4df5514b9a5081018ba&sign=46D3EFF2E84AE00717C37BC87065EEC9', // 请在此替换为你的本地图片路径，如：./images/1.jpg
    caption: '和宝贝一起，新的一年新的大头贴！',
    date: '2026-01-21'
  },
  {
    id: '2',
    url: 'https://cloud.on-u.cn/file-plus/one-drive/url?shareId=u%21aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8wMjdiMDY5N2FjYTA1NjcyL0lRQnotMlVVV05GTVQ0Y3lfd2J0VlZ2X0FkYy1wRE45WlRnOGwzS0VLZHNFM3Bz&u=f8c1f38d4883c4df5514b9a5081018ba&sign=5F32CA290EA8F4D137D09A3051EE9768', // 请在此替换为你的本地图片路径
    caption: '那天你说，我们在上海也能看到雪，宝贝真的好美',
    date: '2025-12-26'
  },
  {
    id: '3',
    url: 'https://cloud.on-u.cn/file-plus/one-drive/url?shareId=u%21aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8wMjdiMDY5N2FjYTA1NjcyL0lRQy1WYVZLQXRmQlRyeFRtcUZibWVtYUFiOXBqN0pvQ2FRU0ZJQ0ZKUDlONzV3&u=f8c1f38d4883c4df5514b9a5081018ba&sign=4168CDB4DB904A006F5A2C23CD83D990', // 请在此替换为你的本地图片路径
    caption: '暖暖的太阳，和甜甜的我们',
    date: '2025-11-25'
  },
  {
    id: '4',
    url: 'https://cloud.on-u.cn/file-plus/one-drive/url?shareId=u%21aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8wMjdiMDY5N2FjYTA1NjcyL0lRQ1pBQzN2ZHZTS1JaMWY1LWU3N0lMdkFZRmg3M19zUmVmSUJEUzNINFRJeWlZ&u=f8c1f38d4883c4df5514b9a5081018ba&sign=C3034363BA379F9D786B94ADE60430F3', // 请在此替换为你的本地图片路径
    caption: '在我的眼里，你永远是我最爱的人',
    date: '2025-11-25'
  },
  {
    id: '5',
    url: 'https://cloud.on-u.cn/file-plus/one-drive/url?shareId=u%21aHR0cHM6Ly8xZHJ2Lm1zL2kvYy8wMjdiMDY5N2FjYTA1NjcyL0lRQ3JFNGtmZkVWZFJMa0R2cHd4aTAzUEFTeGc4cFJKUWx2cVk5b1d4aUNVVGMw&u=f8c1f38d4883c4df5514b9a5081018ba&sign=7C0886B4FB7B8D8E8D0B0C270495D9B4',
    caption:'太阳也躲着我们，在我们的背后偷偷拍！',
    date: '2025-11-15'
  }
];

export const INITIAL_LETTERS: LoveLetter[] = [
  {
    id: 'l1',
    title: '给宝贝',
    content: '亲爱的，2026年的情人节到了。这一路走来，谢谢你给我的每一个拥抱和每一份温暖。我希望我们能一直这样，互相爱着互相依偎着继续走下去。',
    date: '2026-02-14'
  },
  {
    id: 'l2',
    title: '关于2026年的愿望',
    content: '在这个特别的情人节，我只想说：有你在，每一天都是节日。2026，我想带你去更多没去过的地方。',
    date: '2026-02-14'
  }
];

// 用户自定义的情话内容
export const CUSTOM_WHISPERS: string[] = [
  "姜寒，和你在一起的日子都特别特别开心，我们一起聊天，一起看夕阳，一起画画，和宝贝一起感觉就有了温暖有了前进的动力",
  "时间过得好快呀，还想和宝贝和刚开始谈那样无话不谈，对彼此充满爱意",
  "乖宝贝，这一年，我们有好多好多的路一起走过了呢，我们真棒",
  "想和宝贝一起，在未来的每一个情人节里，书写属于我们的故事",
  "不知道怎么表述我对宝贝的思念，但是每当我想起宝贝的时候，我都有爱你的冲动，真的很爱你宝贝~"
];

export const COLORS = {
  primary: 'rose-500',
  secondary: 'pink-400',
  background: 'pink-50',
  accent: 'red-600'
};
