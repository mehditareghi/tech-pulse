import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default function About() {
  return (
    <>
      <PageSEO title={`دربارهٔ ما - ${siteMetadata.title}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            دربارهٔ ما
          </h1>
        </div>
        <div className="py-4">
          <p className="pb-4">
            خوش آمدید به تک‌پالس، منبع شما برای مقالات تخصصی دربارهٔ محصولات اپل. ما در تک‌پالس به
            جمع‌آوری، تحلیل و ارائهٔ اطلاعات تخصصی دربارهٔ محصولات اپل می‌پردازیم.
          </p>
          <p className="pb-4">
            ما با افتخار خود را یک مرجع تخصصی در حوزهٔ محصولات اپل معرفی می‌کنیم و تمام تلاش خود را
            می‌کنیم تا شما را در جریان آخرین تحولات و اخبار داغ دنیای اپل قرار دهیم.
          </p>
          <p className="pb-4">
            در تک‌پالس، مقالات متفاوت و منحصربه‌فردی را دربارهٔ محصولات اپل مشاهده می‌کنید. ما دقت و
            عمق موردنیاز برای تحلیل و بررسی محصولات اپل را داریم و اطلاعات خود را از منابع معتبر و
            مجرب تأمین می‌کنیم. هدف ما این است که شما را با مفاهیم پیچیدهٔ محصولات اپل آشنا کنیم و
            برای شما به‌عنوان علاقه‌مندان به این محصولات، یک پلتفرم آموزشی و الهام‌بخش باشیم.
          </p>
          <p className="pb-4">
            تیم تک‌پالس با ترکیب دانش فنی، تجربه و علاقهٔ شدید به محصولات اپل، اطمینان حاصل می‌کند
            که شما در هر بازدید از وب‌سایت ما اطلاعاتی کارآمد و باکیفیت دریافت خواهید کرد. ما در
            ارائهٔ مقالاتمان دقت، دانش فنی و اطلاعات دقیق را به شما تضمین می‌کنیم.
          </p>
        </div>
      </div>
    </>
  )
}
