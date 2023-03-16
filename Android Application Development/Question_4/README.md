Aim: ```Create a media player application in android that plays audio. Implement play, pause, and loop features.```

1. Layout file - `question_4.xml`
    
    ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <TextView
            android:id="@+id/tv_label"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:text="@string/music_player"
            android:textColor="@color/black"
            android:textSize="24sp"
            android:textStyle="bold"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintVertical_bias="0.23000002" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="30dp"
            android:orientation="horizontal"
            android:weightSum="3"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/tv_label">

            <Button
                android:id="@+id/btn_stop"
                style="@style/TextAppearance.AppCompat.Widget.Button"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_margin="10dp"
                android:layout_weight="1"
                android:padding="3dp"
                android:text="@string/stop"
                android:textColor="@color/white" />

            <Button
                android:id="@+id/btn_play"
                style="@style/TextAppearance.AppCompat.Widget.Button"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_margin="10dp"
                android:layout_weight="1"
                android:padding="3dp"
                android:text="@string/play"
                android:textColor="@color/white" />

            <Button
                android:id="@+id/btn_pause"
                style="@style/TextAppearance.AppCompat.Widget.Button"
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_margin="10dp"
                android:layout_weight="1"
                android:padding="3dp"
                android:text="@string/pause"
                android:textColor="@color/white" />
        </LinearLayout>

    </androidx.constraintlayout.widget.ConstraintLayout>
    ```


3. Create a directory named `raw` in the `res` folder and add the following file.


    <a href="https://github.com/Mohammedvaraliya/AAD-practicals/blob/master/Android%20Application%20Development/Question_4/app/src/main/res/raw/Animals_matrin_garrix.mp3">Download Music</a>

    click on raw, it will download automatically


4. Layout file - `question_four.kt`
    
    ```kotlin
    package com.example.question_4

    import android.media.MediaPlayer
    import androidx.appcompat.app.AppCompatActivity
    import android.os.Bundle
    import android.widget.Button

    class MainActivity : AppCompatActivity() {

        lateinit var btnStop: Button
        lateinit var btnPlay : Button
        lateinit var btnPause: Button

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)
            initComponent()
            initClick()
        }

        private fun initComponent() {
            btnStop = findViewById(R.id.btn_stop)
            btnPlay = findViewById(R.id.btn_play)
            btnPause = findViewById(R.id.btn_pause)
        }

        private fun initClick() {
            val mediaPlayer: MediaPlayer = MediaPlayer.create(applicationContext, R.raw.Animals_matrin_garrix)

            btnStop.setOnClickListener{
                mediaPlayer.stop()
                mediaPlayer.prepare()
            }

            btnPlay.setOnClickListener{
                mediaPlayer.start()
            }

            btnPause.setOnClickListener{
                mediaPlayer.pause()
            }
        }
    }
    ```
    

## Output


![Frame 9](https://user-images.githubusercontent.com/95087498/223484494-4ec3529a-bdd5-4ec5-a747-fd604d8d68ad.png)

![Frame 10](https://user-images.githubusercontent.com/95087498/223484520-327f32e4-0ca5-469e-8cea-b404901cbdc6.png)

![Frame 11](https://user-images.githubusercontent.com/95087498/223484575-3a7356e9-6fba-4a39-a264-1c4d8f05ce02.png)


