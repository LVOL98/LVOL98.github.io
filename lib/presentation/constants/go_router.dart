import 'package:LVOL/presentation/screens/home.dart';
import 'package:go_router/go_router.dart';

final app_router = GoRouter(routes: [
  GoRoute(
    path: '/',
    builder: (context, state) => const HomeScreen(),
  ),
]);
