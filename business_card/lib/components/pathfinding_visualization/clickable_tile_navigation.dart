import 'package:flutter/material.dart';

class ClickableTileNavigation extends StatefulWidget {
  @override
  _ClickableTileNavigationState createState() =>
      _ClickableTileNavigationState();
}

class _ClickableTileNavigationState extends State<ClickableTileNavigation> {
  List<Text> _nodesList;

  @override
  void initState() {
    for (int i = 0; i < 10; i++) {
      _nodesList.add(Text('Test'));
    }
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GridView.extent(
      maxCrossAxisExtent: MediaQuery.of(context).size.width * 0.125,
      children: List.generate(
        10,
        (index) {
          return Text('test');
        } 
      ),
    );

    /* return GridView.builder(
      gridDelegate:
          SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 10),
      itemBuilder: (BuildContext context, int index) {

      },
    ); */
  }
}
