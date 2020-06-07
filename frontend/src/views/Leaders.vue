<template>
  <v-card
    class="mx-auto"
  >
    <v-container class="pa-6" fluid> 

       <p class="mt-6 mb-6 display-1 text-center primary--text">
      Самые популярные общественные лидеры Республики Алтай
    </p>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn text color="primary">Профиль</v-btn>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>check_circle</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>stars</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>visibility</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Иванов Иван', src: 'https://i12.fotocdn.net/s115/8a2ab35e2e882ce3/user_l/2615058257.jpg', flex: 4 },
        { title: 'Петров Петр', src: 'https://i02.fotocdn.net/s118/e5dfe080487a2012/user_xl/2683886110.jpg', flex: 4 },
        { title: 'Колокольцев Игорь', src: 'https://drasler.ru/wp-content/uploads/2018/10/mujskie_avatarki-2.jpg', flex: 4 },
        { title: 'Храмцов Виктор', src: 'https://images.wallpaperscraft.ru/image/siluet_kapiushon_bez_litsa_146076_1024x768.jpg', flex: 3 },
        { title: 'Иванов Иван', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3 },
        { title: 'Александров Артем', src: 'https://drasler.ru/wp-content/uploads/2018/10/mujskie_avatarki-2.jpg', flex: 3 },
        { title: 'Кондрашев Алексей', src: 'https://images.wallpaperscraft.ru/image/siluet_kapiushon_bez_litsa_146076_1024x768.jpg', flex: 3 },
        { title: 'Колганов Петр', src: 'https://i12.fotocdn.net/s115/8a2ab35e2e882ce3/user_l/2615058257.jpg', flex: 2 },
        { title: 'Сидоров Николай', src: 'https://i02.fotocdn.net/s118/e5dfe080487a2012/user_xl/2683886110.jpg', flex: 2 },
        { title: 'Колганов Петр', src: 'https://i12.fotocdn.net/s115/8a2ab35e2e882ce3/user_l/2615058257.jpg', flex: 2 },
        { title: 'Сидоров Николай', src: 'https://i02.fotocdn.net/s118/e5dfe080487a2012/user_xl/2683886110.jpg', flex: 2 },
        { title: 'Колганов Петр', src: 'https://i12.fotocdn.net/s115/8a2ab35e2e882ce3/user_l/2615058257.jpg', flex: 2 },
        { title: 'Сидоров Николай', src: 'https://i02.fotocdn.net/s118/e5dfe080487a2012/user_xl/2683886110.jpg', flex: 2 },
      ],
    }),
  }
</script>
>
