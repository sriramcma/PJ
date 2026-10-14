import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const blockVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0, 0, 0.2, 1] as const,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export default function BlogPost() {
  useEffect(() => {
    document.title = 'Why do Indian women age faster? — Padmini Janaki';
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="space-y-12 sm:space-y-14 text-[17px] sm:text-[19px] leading-[1.7]"
    >
      {/* Top Navigation */}
      <motion.header variants={blockVariants} className="space-y-3">
        <div>
          <Link
            to="/blog"
            className="plain-link text-[14px]"
          >
            ← Back to Blog
          </Link>
        </div>
      </motion.header>

      {/* Main Long-Form Article */}
      <motion.article variants={blockVariants} className="space-y-10 sm:space-y-12">
        {/* Article Header */}
        <header className="space-y-2 pb-2 border-b border-[#1A1A1A]/10 dark:border-[#E8E4DE]/10">
          <h1 className="text-[23px] sm:text-[27px] font-semibold text-[#1A1A1A] dark:text-[#E8E4DE] tracking-tight leading-snug">
            Why do Indian women age faster?
          </h1>
          <div className="text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92] tracking-[0.3px]">
            Padmini Janaki · 12 min read
          </div>
        </header>

        {/* Intro */}
        <div className="space-y-4">
          <p>
            In our fertility clinic, I keep meeting the same woman. Early thirties. Bright, busy, healthy by every outward measure. Then her reports come back describing a body that is years older.
          </p>
          <p>
            The question is always some version of the same thing. “But I’m young. How is this possible?”
          </p>
          <p>
            Here is the uncomfortable truth. Indian women do age faster. Not because we are weak. Because of where we start, how we live, and the quiet habits nobody questions. Most of it happens on the inside long before it shows on the outside.
          </p>
          <p>
            The good news is that almost all of it can be seen early. And much of it can be slowed. Here are ten reasons, and five things you can do about them.
          </p>
        </div>

        {/* Ten Reasons Section */}
        <section className="space-y-6">
          <h2 className="text-[19px] sm:text-[21px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            Ten reasons
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                1. Your ovaries start the countdown before you do.
              </h3>
              <p>
                In a study of over 1.7 lakh Indian women visiting fertility clinics, egg reserve (AMH) showed a sharp fall from around the age of 27. Earlier research found Indian women have lower AMH than European women at every age. Most of us are still deciding about marriage when our ovaries have already decided their pace.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                2. Menopause comes five years early.
              </h3>
              <p>
                The average Indian woman reaches natural menopause at about 46. The Western average is 51. Women can lose up to 30% of their skin collagen in the five years after menopause. So our faces start that chapter sooner too.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                3. The thin-fat body.
              </h3>
              <p>
                Two doctors, one Indian and one European, had the same BMI of 22.3. The Indian doctor carried 21% body fat. The European carried 9%. Scientists call this the Y-Y paradox. We can look slim and still carry the fat that quietly drives insulin resistance and inflammation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                4. Blood running on empty.
              </h3>
              <p>
                57% of Indian women aged 15 to 49 are anaemic. Low iron shows up as tiredness, pale skin and thinning hair. A review of 36 studies found women with hair loss tend to have lower iron stores.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                5. The chai with every meal.
              </h3>
              <p>
                This one nobody talks about. In one small controlled trial, tea taken with an iron-rich meal cut iron absorption by about 37%. Waiting just one hour after the meal halved that loss. Our most loved habit may be stealing the iron from our most careful meals.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                6. A sunny country with no vitamin D.
              </h3>
              <p>
                Studies across India find vitamin D deficiency in 70% to 100% of seemingly healthy people. We live under strong sun and still run low, because we cover up, stay indoors, and work through the hours when sunlight helps most.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                7. The silent thyroid.
              </h3>
              <p>
                About 11% of Indian adults have hypothyroidism, and women are affected about three times as often as men. One in three people who have it don’t know. A slow thyroid shows up as weight gain, dull skin, hair fall and low mood, which we usually blame on age.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                8. The double shift.
              </h3>
              <p>
                Indian women spend about 299 minutes a day on unpaid housework. Men spend 99. That is three extra hours, every day, for years. In a famous US study, mothers under the most chronic stress had cells that looked a decade older than the least stressed mothers. Endless invisible work is not just tiring. It is ageing.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                9. The air on our faces.
              </h3>
              <p>
                A German study of 400 older women found that more exposure to soot and traffic pollution was linked to about 20% more pigment spots on the face. Our cities rank among the most polluted in the world. In brown skin, ageing often shows first as dark patches and uneven tone, not wrinkles.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                10. The wrong ruler.
              </h3>
              <p>
                Much of what medicine calls “normal” was measured on women in Europe and America. In one Indian bone study, a Western reference labelled 34% of women osteoporotic at one wrist site. The Indian reference said 12%. Same bones, different ruler. If the ruler is wrong, the warning comes too late, or too loud, or not at all.
              </p>
            </div>
          </div>
        </section>

        {/* Five Ways to Turn It Around Section */}
        <section className="space-y-6">
          <h2 className="text-[19px] sm:text-[21px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            Five ways to turn it around in your 20s and 30s
          </h2>

          <p>
            You cannot change where you start. You can change when you start paying attention. Each of these has an easy version and an investment version. Start with the easy one this week.
          </p>

          <ol className="space-y-6 list-decimal pl-6">
            <li className="space-y-2 pl-1">
              <div>
                <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                  Know your numbers by 28.
                </strong>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Easy:</span> Once a year, ask for more than haemoglobin. Ask for ferritin (your iron store), vitamin D, TSH (thyroid) and HbA1c (blood sugar over three months). A normal haemoglobin can hide an empty iron tank.
                </li>
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Investment:</span> If you want children later and are thinking about egg freezing, an AMH test helps you and a fertility specialist decide how soon to act. Know its limit: AMH counts eggs. It does not tell you whether you can get pregnant naturally.
                </li>
              </ul>
            </li>

            <li className="space-y-2 pl-1">
              <div>
                <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                  Fix the chai and the kadai.
                </strong>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Easy:</span> Have your tea an hour after meals, not with them. Squeeze lemon on your dal or add amla, because vitamin C helps your body absorb iron. Cook in a cast-iron kadai or tava; studies show it raises the iron in the food itself.
                </li>
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Investment:</span> If your ferritin is low, take iron and vitamin D under a doctor’s guidance, and recheck in three months. Guessing doses on your own can cause harm.
                </li>
              </ul>
            </li>

            <li className="space-y-2 pl-1">
              <div>
                <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                  Measure fat, not weight.
                </strong>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Easy:</span> Take a tape measure. UK health guidance (NICE) advises keeping your waist under half your height. It catches the thin-fat body that a weighing scale misses.
                </li>
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Investment:</span> A DEXA body-composition scan shows your real body fat, muscle and bone density. It is optional, not a routine test at this age, but it gives you a baseline to compare against later.
                </li>
              </ul>
            </li>

            <li className="space-y-2 pl-1">
              <div>
                <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                  Lift, walk, and shield your face.
                </strong>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Easy:</span> Strength train twice a week, even with your own body weight. Muscle protects bones and blood sugar. Walk daily. Wear sunscreen on your face every day, and let your arms get some sun for vitamin D.
                </li>
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Investment:</span> A few months with a good trainer to learn proper form. If you live in a polluted city, an air purifier in the bedroom, where you spend a third of your life.
                </li>
              </ul>
            </li>

            <li className="space-y-2 pl-1">
              <div>
                <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                  Guard your recovery.
                </strong>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[15px] sm:text-[16px] text-[#6E6B65] dark:text-[#9E9A92]">
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Easy:</span> Hand off one task every day, without guilt. Protect a fixed bedtime. Keep 20 minutes of silence for yourself. Rest is not a reward. It is maintenance.
                </li>
                <li>
                  <span className="text-[#1A1A1A] dark:text-[#E8E4DE] font-medium">Investment:</span> A wearable that tracks sleep, heart rate variability, skin temperature and your cycle. It can show changes in your patterns early, so you can talk to a doctor while a small drift is still small.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* The Business Hiding in This Problem Section */}
        <section className="space-y-4">
          <h2 className="text-[19px] sm:text-[21px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            The business hiding in this problem
          </h2>
          <p>
            Every one of these ten reasons has the same shape. Something important is measured too late, too rarely, or against the wrong ruler. Wherever a measurement is missing, a company is waiting to be built. Here are five I would build.
          </p>

          <ol className="space-y-4 list-decimal pl-6">
            <li className="pl-1">
              <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                The Indian woman’s baseline.
              </strong>{' '}
              Nobody owns the reference data for what is normal for Indian women: hormones, iron, vitamin D, thyroid, bone, body fat, by age and region. Labs and fertility chains already hold millions of these results. Whoever cleans, connects and licenses them becomes the ruler every lab, insurer and AI model needs.
            </li>
            <li className="pl-1">
              <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                The 28 panel, sold through employers.
              </strong>{' '}
              One yearly test package built for women aged 25 to 35: ferritin, vitamin D, TSH, HbA1c, and AMH when relevant, with a doctor who explains the results in plain words. Employers already spend on wellness and lose women to burnout in exactly these years. Sell to the company. Serve the woman.
            </li>
            <li className="pl-1">
              <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                Iron-smart everyday food.
              </strong>{' '}
              Anaemia is a kitchen problem as much as a medical one. Cast-iron cookware, iron-and-vitamin-C pairings in packaged foods, and a simple habit layer that says “wait an hour for your chai.” This is a consumer brand, not a clinic, and it can reach crores of homes.
            </li>
            <li className="pl-1">
              <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                Wearables trained on Indian bodies.
              </strong>{' '}
              Rings and watches already read sleep, heart rate variability, skin temperature and the menstrual cycle. Almost none are calibrated on Indian women or connected to Indian doctors. Pair the signal with AI that knows our baselines, and you can spot changes in sleep, stress and cycles early, and prompt the right blood test sooner instead of waiting for the yearly one.
            </li>
            <li className="pl-1">
              <strong className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
                Brown-skin ageing science.
              </strong>{' '}
              Our skin ages through pigment, pollution and sun, not wrinkles first. Most anti-ageing products are designed for lighter skin. Dermatology and skincare built from Indian data, for city pollution and strong sun, is a category still waiting for its leader.
            </li>
          </ol>

          <p className="pt-2">
            Why now: lab tests are cheaper than ever, smartphones are everywhere, wearables cost a fraction of what they did, and AI can turn messy health data into plain advice. The pieces exist. Nobody has put them together for her yet.
          </p>
          <p>
            If you are building any of these, I would love to hear about it.
          </p>
        </section>

        {/* The Real Reason Section */}
        <section className="space-y-4">
          <h2 className="text-[19px] sm:text-[21px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            The real reason
          </h2>
          <p>
            If you read the ten reasons again, you will notice something. Very few of them are about genes. Most are about attention. Who eats last. Who sleeps last. Who gets tested last.
          </p>
          <p>
            Indian women are not ageing faster because our bodies are failing. We are ageing faster because, for generations, nobody was listening to them. Not the system. Not our families. Often, not even us.
          </p>
          <p>
            The body speaks long before it complains. Start listening in your twenties, and your forties will thank you.
          </p>
          <p className="font-medium text-[#1A1A1A] dark:text-[#E8E4DE] pt-1">
            Padmini
          </p>
        </section>

        {/* Semantic Footer for Sources */}
        <footer className="pt-8 border-t border-[#1A1A1A]/10 dark:border-[#E8E4DE]/10 text-[14px] sm:text-[15px] space-y-4">
          <h2 className="text-[17px] sm:text-[18px] font-medium text-[#1A1A1A] dark:text-[#E8E4DE]">
            Sources
          </h2>
          <ol className="space-y-2.5 list-decimal pl-6 text-[#6E6B65] dark:text-[#9E9A92]">
            <li>
              AMH in 1,71,595 Indian women: Murdia K. et al., <em>Age-related change in AMH in women seeking fertility</em>, Journal of IVF-Worldwide, 2023
            </li>
            <li>
              Menopause at 46.2 years: Ahuja M., <em>Age of menopause and determinants of menopause age: A PAN India survey by IMS</em>, Journal of Mid-Life Health, 2016. Collagen loss after menopause: Calleja-Agius J. et al., <em>Skin ageing</em>, Menopause International, 2007
            </li>
            <li>
              The Y-Y paradox (Yajnik and Yudkin, Lancet, 2004), as summarised in Kapoor N., <em>Thin Fat Obesity: The Tropical Phenotype of Obesity</em>, Endotext
            </li>
            <li>
              Anaemia at 57% (NFHS-5): DT Next, May 2024. Iron and hair loss: Treister-Goltzman Y. et al., <em>Iron Deficiency and Nonscarring Alopecia in Women</em>, Skin Appendage Disorders, 2022
            </li>
            <li>
              Tea and iron absorption: Ahmad Fuzi S.F. et al., <em>A 1-h time interval between a meal containing iron and consumption of tea attenuates the inhibitory effects on iron absorption</em>, American Journal of Clinical Nutrition, 2017
            </li>
            <li>
              Vitamin D deficiency at 70–100%: G R., Gupta A., <em>Vitamin D Deficiency in India: Prevalence, Causalities and Interventions</em>, Nutrients, 2014
            </li>
            <li>
              Hypothyroidism in eight Indian cities: Unnikrishnan A.G. et al., <em>Indian Journal of Endocrinology and Metabolism</em>, 2013, as reported by BioSpectrum India
            </li>
            <li>
              Unpaid work, 299 vs 99 minutes a day (NSO Time Use Survey 2019): The News Minute. Stress and cell ageing in mothers (Epel et al., PNAS, 2004): Psychiatric News
            </li>
            <li>
              Pollution and pigment spots: Vierkötter A. et al., <em>Airborne particle exposure and extrinsic skin aging</em>, Journal of Investigative Dermatology, 2010
            </li>
            <li>
              Indian vs Caucasian bone reference: Makker A. et al., <em>Normative bone mineral density data at multiple skeletal sites in Indian subjects</em>, Archives of Osteoporosis, 2008
            </li>
          </ol>

          <div className="pt-2 space-y-1.5 text-[#6E6B65] dark:text-[#9E9A92] pl-2 text-[13px] sm:text-[14px]">
            <div>
              Cast-iron cooking and iron: Sharma S. et al., <em>Effect of cooking food in iron-containing cookware</em>, Nepal Journal of Epidemiology, 2021
            </div>
            <div>
              What AMH can and cannot tell you: Campbell M.A., <em>The role of anti-Müllerian hormone testing for fertility prognosis</em>, BC Medical Journal, 2024
            </div>
            <div>
              Waist under half your height (NICE, 2022): <em>Waist-to-height ratio</em>
            </div>
          </div>
        </footer>
      </motion.article>

      {/* Bottom Navigation */}
      <motion.footer
        variants={blockVariants}
        className="pt-10 flex items-center justify-between text-[13px] sm:text-[14px] text-[#6E6B65] dark:text-[#9E9A92]"
      >
        <Link to="/blog" className="plain-link">
          ← Back to Blog
        </Link>
        <span>© 2026 Padmini Janaki</span>
      </motion.footer>
    </motion.div>
  );
}
