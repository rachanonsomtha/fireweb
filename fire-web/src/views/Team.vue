<template>
<div class="team" xs6>
    <h4 right class="font-weight-light display-1 black--text mt-3 my-3">ผู้จัดทำ</h4>
    <v-layout row justify-start wrap offset-xs1>
        <v-flex xs12 sm5 md3>
            <h2 class="black--text">
                ที่ปรึกษาโครงการ
            </h2>
            1. อาจารย์ รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล
            <br>
2. อาจารย์ รศ.ดร.นิพนธ์ ธีรอำพน
            <br>
            <h2 class="black--text">
                ฝ่ายประสานงานและประชาสัมพันธ์
            </h2>
            1. พนาสนฑ์ มโนรส
            <br>
2. พรวิชชา​ สมทรัพย์
            <br>
3. รวีวรรณ ชัยสุพัฒนากุล
            <br>
4. สุภชาญา ประธาน
            <br>
5. กานต์ชนา ปัญญา
            <br>
6. ว่าที่ ร.ต.หญิงพรสวรรค์ อัศววุฒิไกร
            <br>
            <h2>
                อาสาสมัครติดตั้งเครื่องตรวจจับควันไฟ
            </h2>
            1. ปกรณ์ แสงงาม
            <br>
2. ณัฐพงษ์ ปัญญา
            <br>
3. ปิยะณัฐ บุหรัน
            <br>
4. สุภชาญา ประธาน
            <br>
5. ธนาคม หัสแดง
            <br>
6. วิธวินท์ อัจฉริยวิริยะ
            <br>
7. พนาสนฑ์ มโนรส
            <br>
8. ณัฐภัทร การะเกษ
            <br>
9. Wassim TENACHI
            <br>
10. Méline KIEFFER
            <br>
11. Lucas LO GIUDICE
            <br>
12. Nathn MANISCALCO
            <br>
13. Zegui FOKY
            <br>
14. Mourad EL OUALKADI
            <br>
15. ภาณุวิทย์ ผลเกิด
            <br>
16. พรวิชชา​ สมทรัพย์
            <br>

</v-flex>

            <v-flex xs12 sm5 md3>
                <h2>
                    ผู้พัฒนาอุปกรณ์ Smoke Detectors
                </h2>
                1. สมนึก สุระธง
                <br>
2. นายจักรภพ ใหม่เสน
                <br>
3. ฤทธิพงศ์ วงค์เขื่อนแก้ว
                <br>
4. กิตติยา ทุ่นศิริ
                <br>
5. สุรักษ์ อุดมสม
                <br>
6. พนาสนฑ์ มโนรส
                <br>
7. ณัฐภัทร การะเกษ
                <br>
8. พรวิชชา​ สมทรัพย์
                <br>
9. สุภชาญา ประธาน
                <br>
10. ธนาคม หัสแดง
                <br>
11. ปกรณ์ แสงงาม
                <br>
12. อภิวัฒน์ บุตรวงค์
                <br>
                <h2>
                    ผู้พัฒนาซอฟต์แวร์เว็บไซต์และอัลกอริทึมเบื้องหลัง
                </h2>
                1. ภาณุวิทย์ ผลเกิด
                <br>
2. ณัฐภัทร การะเกษ
                <br>
3. พรวิชชา​ สมทรัพย์
                <br>
4. รัชชานนท์ สมทา
                <br>
5. นันทวัฒน์  วิเศษทรัพย์
                <br>

</v-flex>
                <!-- <v-divider vertical></v-divider> -->
                <v-flex xs12 sm6 md6>
                    <img height="3%" src="/img/CILab_logo.png" alt="">
                    <img height="2%" src="/img/AIS-logo-1.png" alt="">
                    <img height="3%" src="/img/Chiang_Mai_University_Logo.png" alt="">
                    <img height="3%" src="/img/logo-th.png" alt="">

                </v-flex>

    </v-layout>

</div>
</template>

<script>
export default {
    data() {
        return {
            team: [{
                    name: 'Non',
                    role: 'Web developer',
                    avatar: '/img/avatar-2.png'
                },
                {
                    name: 'Ryu',
                    role: 'Graphic designer',
                    avatar: '/img/avatar-2.png'
                },
                {
                    name: 'Chun Li',
                    role: 'Web developer',
                    avatar: '/img/avatar-3.png'
                },
                {
                    name: 'Gouken',
                    role: 'Social media maverick',
                    avatar: '/img/avatar-4.png'
                },
                {
                    name: 'Yoshi',
                    role: 'Sales guru',
                    avatar: '/img/avatar-5.png'
                }
            ]
        }
    }

}
</script>
