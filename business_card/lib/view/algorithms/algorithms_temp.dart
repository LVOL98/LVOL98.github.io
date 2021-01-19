import 'package:flutter/material.dart';
import 'package:temp/components/pathfinding_visualization/clickable_tile_navigation.dart';
import 'package:temp/components/sorting_visualization/bar_sorting.dart';
import 'package:temp/components/structure/mobile_page_structure.dart';
import 'package:temp/model/sorting/insertion_sort.dart';
import 'package:temp/model/sorting/quick_sort.dart';
import 'package:temp/view/algorithms/algorithms_content.dart';

class AlgorithmTemp extends StatefulWidget {
  @override
  _AlgorithmTempState createState() => _AlgorithmTempState();
}

class _AlgorithmTempState extends State<AlgorithmTemp> {
  @override
  Widget build(BuildContext context) {
    return MobilePageStructure(
      'resources/misc/Algo.jpg',
      Container(
        margin: const EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            ClickableTileNavigation()
          ],
        ),
      ),
      topRightIconColor: Colors.black,
    );
  }
}
