import 'package:flutter/material.dart';

void main() {
  runApp(MyDemo());
}

class MyDemo extends StatelessWidget {
  const MyDemo({Key? key});
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            body: Column(
          children: [Layer(), Images()],
        )));
  }
}

class Layer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
          children: [
            Row(
              children: [
                ElevatedButton(
                  child: Text(
                    'W',
                    style: TextStyle(color: Colors.white, fontSize: 38),
                  ),
                  onPressed: () {},
                  style:
                      ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                ),
                ElevatedButton(
                  child: Text(
                    'O',
                    style: TextStyle(color: Colors.white, fontSize: 38),
                  ),
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.orange,
                  ),
                ),
                ElevatedButton(
                    child: Text('R',
                        style: TextStyle(color: Colors.white, fontSize: 38)),
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.orange)),
                ElevatedButton(
                  child: Text('D',
                      style: TextStyle(color: Colors.white, fontSize: 38)),
                  onPressed: () {},
                  style:
                      ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                )
              ],
              mainAxisAlignment: MainAxisAlignment.center,
            ),
            Row(children: [
              Text(
                'GAME',
                style: TextStyle(fontSize: 38, color: Colors.amber),
              ),
            ], mainAxisAlignment: MainAxisAlignment.center)
          ],
        ),
        margin: const EdgeInsets.fromLTRB(0, 30, 0, 0));
  }
}

class Images extends StatefulWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      children: [
        Image(
          image: AssetImage('assets/irobot.png'),
          width: 300,
          height: 300,
        ),
        Text(
          'READY?',
          style: TextStyle(fontSize: 25),
        ),
        Container(
          width: 310,
          height: 60,
          child: ElevatedButton(
              child: Text(
                'PLAY',
                style: TextStyle(fontSize: 24),
              ),
              onPressed: () {},
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.orange),
                  foregroundColor: MaterialStateProperty.all(Colors.white))),
        )
      ],
    ));
  }
}
