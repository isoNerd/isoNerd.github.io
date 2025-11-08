import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import ThemedImage from "@theme/ThemedImage";
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomeSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span style={{ textShadow: '0px 0px 4px white' }}> I$O/lEC</span>
          <span style={{ color: '#880015' }}>Nerd</span>
        </h1>
        <p className={styles.heroSubtitle}>
          靠 AI 來 Vibe Coding，不如自己 Ninja Coding。
        </p>
        <ul className={styles.heroLists}>
          <li>為什麼他的機器不能跑，我的機器可以跑？</li>
          <li>系統重開看看，搞不好就能跑了。</li>
          <li>我知道這樣寫不好，先上線之後再改。</li>
          <li>分支合併後先不要刪，搞不好以後會回來看。</li>
          <li>警告是警告，錯誤是錯誤，你就說能不能動吧！</li>
          <li>原本程式是好的，Cursor改壞的。</li>
        </ul>
        <p className={styles.heroTagline}>
          <em>─ 你知道抄Code除了 <code>Ctrl+C</code>+<code>Ctrl+V</code> 外，
          還可以用 <code>Ctrl+Ins</code> + <code>Shift+Ins</code> 嗎？</em>
        </p>
      </div>
      <div className={styles.heroIllustration}>
        <ThemedImage
          alt="Vibe Coding?"
          sources={{
            light: useBaseUrl('/img/logo.png'),
            dark: useBaseUrl('/img/logo-background.png')
          }}
          className={styles.heroImage}
        />
      </div>
    </section>

  );
}

export default function Home(): ReactNode {
  return (
    <Layout description='與其Vibe Coding，不如自己 Ninja Coding！以共享神秘小知識、屎山代碼、大糞需求為主的網站'>
      <main>
        <HomeSection />
      </main>
    </Layout>
  );
}
