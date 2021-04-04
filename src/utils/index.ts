export interface OpenData {
  needSession: boolean;
  hideToolbar: boolean;
  url: string;
}

export const closeScheme = () => {
  document.location.href = '/';
};

export const share = async (data: Required<ShareData>) => {
  if (navigator.share) {
    navigator.share(data);
  } else if (await navigator.clipboard) {
    await navigator.clipboard.writeText(data.url);
    alert('Copy URI');
  }
};

export function openUrl(url: string) {
  window.open(url, '_blank');
}

export function webView(): boolean {
  const userAgent = navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  return ios ? !safari : userAgent.includes('wv');
}
