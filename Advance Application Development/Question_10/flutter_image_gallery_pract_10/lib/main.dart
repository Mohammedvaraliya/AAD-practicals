import 'package:flutter/material.dart';
import 'package:flutter_image_gallery_pract_10/gallery_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.green,
        appBarTheme: const AppBarTheme(centerTitle: true),
      ),
      home: GalleryPage(),
    );
  }
}
