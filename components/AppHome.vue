<template>
  <AppFade>
    <div>
      <div class="img-container">
        <app-slider></app-slider>
      </div>
      <div class="container content">
        <h1>רינתאל בר</h1>
        <h2>מומחית לטיפול ברפואה סינית</h2>
        <p>
          מה זה דיקור סיני? דיקור סיני (הנקרא גם אקופונטורה בלעז) הינו שיטת
          טיפול עתיקה מסין, המסייעת לאיזון נפש- גוף. על פי המסורת הסינית העתיקה,
          פעולת הדיקור מבוססת על האנרגיה המניעה את החיים בעולמנו, הלא היא
          אנרגיית הצ'י. הצ'י זורם בערוצי אנרגיה שונים לאורך ורוחב גוף האדם
          הנקראים מרידיאנים. לאורך המרידאינים, קיימות מספר נקודות שעשויות להשפיע
          על זרימת האנרגיה – ע"י החדרת מחט עדינה דקיקה במהלך הדיקור, הגוף עצמו
          פועל לריפוי מערכות מסוימות בגוף, או להפגת כאבים או/ו לאיזון האופטימלי.
        </p>
        <p>
          כיצד יודעים היכן לבצע את הדיקור? קיימות מספר נקודות על גבי המרידיאנים
          התומכות בפעולתם של איברים שונים בגופנו. במקרה של כאב בטן, למשל, אין
          חובה לדקור את המטופל בבטן. פעמים רבות דיקור על פני הרגליים או בידיים
          מסייע באופן האפקטיבי ביותר, כיוון שאותו מרידיאן על גבי איברים אלו מגיע
          בסופו של דבר גם לקיבה ולאברים אחרים בבטן.
        </p>
      </div>
    </div>
  </AppFade>
</template>

<script>
import AppSlider from "@/components/AppSlider.vue";
import AppFade from "@/components/AppFade.vue";

export default {
  data() {
    return {
      images: [
        "@/assets/acupuncture_img_01.jpg",
        "@/assets/acupuncture_img_02.jpg",
        "@/assets/acupuncture_img_03.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    next() {
      this.currentIndex += 1;
    },
    prev() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg() {
      this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
  components: {
    appSlider: AppSlider,
    AppFade
  }
};
</script>

<style lang="scss" scoped>
.img-container {
  width: 100%;
  height: 25rem;
}
.content {
  width: 60%;
  margin-bottom: 2rem;
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    margin-top: 0;
  }
  p {
    text-align: center;
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
