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

    


4. Activity file - `PracticalFourOne.kt`
    
    ```kotlin
    package com.example.android_practical_04

    import android.content.Intent
    import android.content.pm.PackageManager
    import android.net.Uri
    import android.os.Bundle
    import androidx.appcompat.app.AppCompatActivity
    import androidx.appcompat.widget.AppCompatButton
    import androidx.core.app.ActivityCompat
    import androidx.core.content.ContextCompat
    import com.example.android_practical_04.HomeActivity
    import com.example.android_practical_04.R
    import com.example.android_practical_04.ActivityLifecycle


    class MainActivity : AppCompatActivity() {

        private lateinit var buttonCall: AppCompatButton
        private lateinit var buttonDial: AppCompatButton
        private lateinit var buttonBrowser: AppCompatButton
        private lateinit var buttonHome: AppCompatButton
        private lateinit var buttonActivityLifeCycle: AppCompatButton

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)
            buttonCall = findViewById(R.id.btn_implicit_call)
            buttonDial = findViewById(R.id.btn_implicit_dial)
            buttonBrowser = findViewById(R.id.btn_implicit_browser)
            buttonHome = findViewById(R.id.btn_home)
            buttonActivityLifeCycle = findViewById(R.id.btn_activity_lifecycle)


            this.buttonCall.setOnClickListener{
                if (ContextCompat.checkSelfPermission(this,android.Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
                    ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.CALL_PHONE),100)
                } else {
                    val intent = Intent(Intent.ACTION_CALL, Uri.parse("tel:" + "+91123456789"))
                    startActivity(intent)
                }
            }

            buttonDial.setOnClickListener{
                val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + "+91123456789"))
                startActivity(intent)
            }

            buttonBrowser.setOnClickListener{
                val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.co.in/"))
                startActivity(intent)
            }

            buttonHome.setOnClickListener{
                val intent = Intent(this,HomeActivity::class.java)
                startActivity(intent)
            }

            buttonActivityLifeCycle.setOnClickListener{
                val intent = Intent(this,ActivityLifecycle::class.java)
                startActivity(intent)
            }
        }
    }
    ```


5. Activity file - `HomeActivity.kt`

    ```kotlin
    package com.example.android_practical_04

    import android.os.Bundle
    import androidx.appcompat.app.AppCompatActivity

    class HomeActivity : AppCompatActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.home_activity)
        }
    }
    ```


6. Activity file - `ActivityLifeCycle.kt`

    ```kotlin
    package com.example.android_practical_04

    import android.os.Bundle
    import androidx.appcompat.app.AppCompatActivity

    class ActivityLifecycle: AppCompatActivity() {

        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_life_cycle)
        }
    }
    ```

    

## Output


![Frame 9](https://user-images.githubusercontent.com/95087498/223484494-4ec3529a-bdd5-4ec5-a747-fd604d8d68ad.png)

![Frame 10](https://user-images.githubusercontent.com/95087498/223484520-327f32e4-0ca5-469e-8cea-b404901cbdc6.png)

![Frame 11](https://user-images.githubusercontent.com/95087498/223484575-3a7356e9-6fba-4a39-a264-1c4d8f05ce02.png)


