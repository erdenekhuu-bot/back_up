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

class Images extends StatelessWidget {
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
              onPressed: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => NextPage(14.5, 16.6)));
              },
              style: ButtonStyle(
                  backgroundColor: MaterialStateProperty.all(Colors.orange),
                  foregroundColor: MaterialStateProperty.all(Colors.white))),
        )
      ],
    ));
  }
}

class SecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Second Page'),
          backgroundColor: Colors.blue,
        ),
        body: Center(
            child: Container(
                child: ElevatedButton(
                    child: Text('Return root page'), onPressed: () {}))));
  }
}

class NextPage extends StatelessWidget {
  final double font;
  final double tfont;
  @override
  const NextPage(this.font, this.tfont);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Container(
      width: 22.89,
      child: Column(
        children: [
          Row(
            children: [
              ElevatedButton(
                child: Text(
                  'W',
                  style: TextStyle(color: Colors.white, fontSize: font),
                ),
                onPressed: () {},
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
              ),
              ElevatedButton(
                child: Text(
                  'O',
                  style: TextStyle(color: Colors.white, fontSize: font),
                ),
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.orange,
                ),
              ),
              ElevatedButton(
                  child: Text('R',
                      style: TextStyle(color: Colors.white, fontSize: font)),
                  onPressed: () {},
                  style:
                      ElevatedButton.styleFrom(backgroundColor: Colors.orange)),
              ElevatedButton(
                child: Text('D',
                    style: TextStyle(color: Colors.white, fontSize: font)),
                onPressed: () {},
                style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
              )
            ],
            mainAxisAlignment: MainAxisAlignment.center,
          ),
          Row(children: [
            Text(
              'GAME',
              style: TextStyle(fontSize: tfont, color: Colors.amber),
            ),
          ], mainAxisAlignment: MainAxisAlignment.center),
        ],
      ),
      // margin: const EdgeInsets.fromLTRB(50, 30, 50, 0)
    )));
  }
}
