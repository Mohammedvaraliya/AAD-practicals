## Activity Life Cycle
<br>

### My Android Application

This is an Android application that demonstrates the activity lifecycle in Android. The application was built using Android Studio and programmed in Kotlin.

### Features

The application has a single activity that overrides all of the activity lifecycle methods, including:

* `onCreate()`: called when the activity is first created.
* `onStart()`: called when the activity is becoming visible to the user.
* `onResume()`: called when the activity will start interacting with the user.
* `onPause()`: called when the activity is going into the background, but has not been destroyed.
* `onStop()`: called when the activity is no longer visible to the user.
* `onDestroy()`: called when the activity is being destroyed.
* `onRestart()`: called when the activity is restarting after being stopped.

Each of these methods returns a Toast message that indicates which method is currently being executed.

1. Layout file - `activity_main.xml`
    
    ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="16dp"
        tools:context=".MainActivity">

        <TextView
                android:id="@+id/tv_heading"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="ACTIVITY LIFE CYCLE"
                android:textStyle="bold"
                android:textSize="24sp"
                android:padding="16dp"
                app:layout_constraintTop_toTopOf="parent"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_oncreate"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onCreate()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_heading"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_onstart"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onStart()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@+id/tv_oncreate"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_oncresume"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onResume()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_onstart"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_onpause"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onPause()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_oncresume"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_onstop"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onStop()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_onpause"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_ondestroy"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onDestroy()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_onstop"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        <TextView
                android:id="@+id/tv_onrestart"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="onRestart()"
                android:textSize="16sp"
                android:padding="8dp"
                android:layout_marginTop="16dp"
                app:layout_constraintTop_toBottomOf="@id/tv_ondestroy"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintEnd_toEndOf="parent" />

        </androidx.constraintlayout.widget.ConstraintLayout>
    ```

2. Activity file - `MainActivity.kt`
    
    ```kotlin
        package com.example.Question_5

        import android.os.Bundle
        import android.os.PersistableBundle
        import android.widget.Toast
        import androidx.appcompat.app.AppCompatActivity

        class MainActivity : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)
                setContentView(R.layout.activity_main)
                Toast.makeText(this, "You are in onCreate activity", Toast.LENGTH_SHORT).show()
        }

        override fun onStart() {
                super.onStart()
                Toast.makeText(this, "You are in onStart activity", Toast.LENGTH_SHORT).show()


        }

        override fun onResume() {
                super.onResume()
                Toast.makeText(this, "You are in onResume activity", Toast.LENGTH_SHORT).show()

        }

        override fun onPause() {
                super.onPause()
                Toast.makeText(this, "You are in onPause activity", Toast.LENGTH_SHORT).show()

        }

        override fun onStop() {
                super.onStop()
                Toast.makeText(this, "You are in onStop activity", Toast.LENGTH_SHORT).show()

        }

        override fun onDestroy() {
                super.onDestroy()
                Toast.makeText(this, "You are in onDestroy activity", Toast.LENGTH_SHORT).show()

        }

        override fun onRestart() {
                super.onRestart()
                Toast.makeText(this, "You are in onnRestart activity", Toast.LENGTH_SHORT).show()

        }
        }
    ```

### Overview

![Frame 4](https://user-images.githubusercontent.com/95087498/221184459-2fdcfb65-97d0-4fb5-a24a-32965c198a14.png)

![Frame 5](https://user-images.githubusercontent.com/95087498/221184490-d1b0cc63-627f-45d9-b193-02d908616f20.png)

