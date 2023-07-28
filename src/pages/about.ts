import { PageTitle } from "../components/page-title";

export function About() {
    const content = document.createElement("div");
    content.classList.add("page-content");
    content.appendChild(PageTitle("About"));
    const temp = document.createElement("p");
    temp.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet libero at ligula ultrices bibendum. Cras porta sem eget nunc elementum, sed scelerisque massa lobortis. Nam eu elit in enim accumsan tincidunt. Quisque dignissim ut nisl quis porttitor. Etiam in augue diam. Sed dui elit, ultrices a vestibulum eget, convallis at est. Sed rhoncus elementum purus.

    Phasellus aliquet mauris id ex molestie aliquet et sed purus. In maximus pellentesque justo, et imperdiet mi venenatis et. Sed facilisis hendrerit risus eget scelerisque. Sed eget tincidunt lacus. Donec efficitur tellus sit amet ante lobortis venenatis. Nunc placerat ut mauris sollicitudin tempus. Morbi consectetur mattis imperdiet. Aenean blandit dolor erat, at finibus urna pulvinar ut. Etiam elementum tortor sem, auctor tempor nibh bibendum mattis. Vestibulum eget elit finibus, sagittis ligula vel, posuere velit. Aenean pellentesque nunc vel dolor commodo, at pulvinar tellus porta. Suspendisse auctor, sem non scelerisque viverra, lacus sem tincidunt purus, nec blandit enim massa ut odio. Donec tortor risus, auctor tincidunt orci vel, pulvinar maximus quam. Nulla facilisi.
    
    Duis in massa nec orci varius lacinia. Suspendisse imperdiet efficitur pretium. Aliquam erat volutpat. Mauris dapibus urna sit amet leo scelerisque sodales. Sed bibendum tellus in arcu ornare, vitae finibus mauris bibendum. Nam in diam porta, congue purus nec, molestie diam. Quisque consequat dolor eu mi ornare, sed consequat neque finibus. Integer aliquam porttitor mauris, sed dapibus dolor interdum sed. Donec eget tortor vel libero vulputate dapibus et sit amet lorem. Maecenas eget auctor mi.
    
    Mauris feugiat posuere sem nec tincidunt. Integer elementum sit amet dui a venenatis. Suspendisse eleifend, est id iaculis dapibus, est odio tincidunt elit, vitae lacinia ante eros in justo. Nam non pellentesque lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id sollicitudin urna. Cras risus quam, ultrices eget consequat et, vestibulum id massa. Ut in sem purus. Aliquam ultricies iaculis lectus. Sed pharetra iaculis convallis. Suspendisse potenti. Phasellus pellentesque dolor consequat pellentesque rhoncus. Donec nec mauris libero. Nulla placerat varius luctus. Nulla ullamcorper elit vitae massa imperdiet varius. Donec vitae aliquet ligula.
    
    Nunc vitae ultricies mauris. Vivamus id ante elit. Nunc at ex diam. Duis vestibulum odio eget lacus iaculis euismod tincidunt efficitur erat. Duis lectus mauris, efficitur non egestas vitae, pretium nec mi. Maecenas et mauris justo. Nam quis consequat dui. Nunc ac dictum nulla, sit amet pretium ante. Nam aliquet mi interdum vehicula blandit. Fusce in enim nisl.
    
    Phasellus dapibus aliquet metus sed dapibus. Integer non nunc feugiat, dictum augue nec, molestie sem. Suspendisse potenti. Pellentesque sagittis vitae eros at elementum. Curabitur a leo molestie, varius nisi non, pulvinar diam. Aliquam dapibus, purus id maximus varius, justo eros lobortis purus, eget lobortis lectus risus ac nisi. Maecenas arcu libero, ullamcorper id venenatis rutrum, cursus ac purus. Sed ac tortor lectus. Aenean sed cursus ipsum, nec vestibulum massa.
    
    Sed erat nunc, luctus ut eros eget, elementum euismod turpis. Nullam ut libero sapien. Maecenas commodo dolor non arcu tristique semper. Vestibulum nec eros nec nunc rhoncus mattis id vitae risus. Integer finibus libero non tincidunt pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non leo leo. Nullam dignissim porttitor commodo. Ut sit amet pharetra est. Cras ac orci ipsum. Aliquam at metus tincidunt, consequat mauris vitae, posuere nulla. Pellentesque mollis sem sit amet accumsan dictum. Cras tincidunt, nisi at malesuada congue, lacus risus fermentum turpis, id porta odio magna in massa. Nunc tristique felis vel volutpat placerat.
    
    Fusce sed egestas enim, quis ultricies lacus. Maecenas rutrum metus iaculis odio pulvinar posuere. Suspendisse semper lectus id laoreet tincidunt. Nam id tristique augue. In condimentum imperdiet egestas. Aenean at tempor nunc, ac malesuada leo. Nulla blandit tellus eros, et congue nisl viverra et. Ut vel pretium ipsum, sed condimentum nunc. Cras viverra scelerisque ipsum, a cursus nulla mattis mollis. In hac habitasse platea dictumst.
    
    In hac habitasse platea dictumst. Aenean mauris erat, vestibulum quis magna in, consequat sagittis nisi. Donec ut pellentesque justo. Aliquam vehicula tellus feugiat mollis euismod. Sed erat turpis, lobortis ut imperdiet eget, venenatis vel felis. Sed in turpis laoreet, dignissim purus id, pretium orci. Curabitur ultricies rutrum risus, nec dictum diam interdum vel.
    
    Etiam cursus volutpat auctor. Quisque vulputate, turpis tincidunt dictum interdum, lacus sapien auctor est, sed fringilla erat risus non arcu. Aenean posuere iaculis metus vitae interdum. Nullam bibendum sapien non consequat tristique. Ut faucibus eget diam eu condimentum. Ut egestas in tellus id rhoncus. Suspendisse potenti. Phasellus id purus non velit elementum aliquam viverra quis ligula. Donec euismod elit quis elit consectetur aliquam. Vivamus venenatis tincidunt magna, id eleifend tortor tincidunt eu. Praesent at dui at turpis porttitor consectetur id sit amet lectus.
    
    Vestibulum vel accumsan ex, non mollis eros. Donec vehicula viverra mi, id ultricies diam dapibus in. Pellentesque quis tempus est. Ut a pretium ipsum, eu placerat dui. Donec dignissim mauris in luctus pulvinar. Suspendisse ac eros faucibus, dapibus dolor id, mollis nisl. Ut quis felis eu felis luctus tincidunt. Integer mollis nibh enim, ut congue justo mattis ut. Nullam vitae enim et velit luctus consectetur. Fusce varius vulputate tellus at congue. Sed pretium suscipit nisl rutrum aliquet.
    
    Vivamus sem neque, faucibus quis suscipit at, dictum non orci. Aliquam sollicitudin, orci ut pharetra interdum, magna mi ullamcorper orci, non dapibus neque lectus ut dolor. Quisque tincidunt ut felis in eleifend. Phasellus rutrum gravida enim, at varius odio semper vel. Proin ut interdum elit, eu hendrerit tellus. In hac habitasse platea dictumst. Pellentesque ornare ligula sit amet leo vulputate, sed sollicitudin arcu malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque eu accumsan ligula. Pellentesque pharetra vulputate tellus. Aenean sed dignissim sapien. Pellentesque pharetra augue a lectus sagittis, ullamcorper porttitor ex cursus. Mauris sed ultrices nibh.
    
    Vivamus eu porttitor felis. Phasellus bibendum dictum ultrices. Integer ultrices commodo magna vel molestie. Vivamus varius suscipit ante. Etiam lobortis tellus non ex pellentesque, ut porta libero semper. Integer consectetur viverra efficitur. Morbi convallis velit in sodales pellentesque. Nam ultrices, sem in semper aliquam, arcu enim facilisis libero, sed ornare magna diam ac urna. Cras posuere metus id sapien tincidunt tincidunt.
    
    In odio enim, egestas sit amet est nec, feugiat congue purus. Pellentesque vitae diam sit amet tellus aliquam ultrices eu feugiat metus. Vivamus facilisis tempus turpis, id dapibus nulla lacinia pulvinar. Duis purus sapien, cursus sed odio ac, feugiat elementum magna. Morbi blandit sem elit, vitae lobortis ante dapibus eu. Sed eget tortor eu neque ornare tincidunt sit amet id turpis. Nulla molestie nunc bibendum urna eleifend, pellentesque euismod mi malesuada. Morbi at mi urna.
    
    Integer sem arcu, consectetur a porta a, tempus pharetra dolor. Aliquam sed nisi id velit bibendum congue a vel urna. Sed vitae ante vitae ligula blandit pellentesque. Praesent ut tincidunt est. Pellentesque eu lorem ut justo hendrerit faucibus sollicitudin vitae urna. Curabitur ac convallis erat, ac egestas erat. Nullam lacinia tortor quis mi efficitur pellentesque. Aliquam cursus luctus pulvinar. Duis accumsan bibendum tortor vitae gravida. Phasellus vitae erat at massa rutrum consectetur sed ut libero. Curabitur et odio sit amet sapien facilisis ultrices.
    
    Proin sed dolor nec augue accumsan maximus. Praesent nec nisl eu purus maximus vestibulum et at erat. Ut porttitor consectetur odio vel tincidunt. Etiam dictum ultricies ligula sit amet tristique. Etiam euismod dui sit amet quam bibendum, ut suscipit diam sodales. Sed erat enim, pharetra sed volutpat et, porta id ligula. Curabitur tincidunt fermentum magna. Nulla facilisi.
    
    Aenean vitae eros eget odio aliquam pharetra at vel nulla. Phasellus pulvinar quam tempus tortor vehicula, eu lacinia lacus lobortis. Morbi aliquam blandit erat, ut pharetra nunc consectetur ac. Suspendisse ac massa mattis, porttitor nulla consequat, porta ante. Nunc vel magna libero. Curabitur a lobortis orci, sed auctor risus. Morbi vitae eleifend turpis, a aliquet massa. Donec a ex ligula. Cras eu tincidunt odio, at malesuada nibh. Aenean mollis arcu quis augue ultricies condimentum.
    
    Aliquam placerat leo magna, vel lacinia mi fringilla ac. Nullam elementum interdum sapien in sodales. Cras semper pretium tristique. Cras mattis placerat massa, sed molestie odio venenatis vitae. Suspendisse facilisis vestibulum lobortis. Nullam lobortis pulvinar est eu aliquet. Pellentesque maximus, ante ut fringilla tristique, purus arcu condimentum sapien, sed auctor orci ante ac nibh. Fusce vestibulum, tortor eget consectetur sodales, arcu risus auctor nulla, ac eleifend sapien diam sed nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam faucibus, purus vitae facilisis tempus, odio libero sodales lectus, sit amet dignissim orci orci in quam. Morbi sed dapibus eros. Ut at lectus diam. Etiam cursus odio eu gravida tincidunt.
    
    Nunc tristique consequat cursus. Duis venenatis lacus felis, sit amet elementum nulla sagittis vel. Nam vestibulum turpis metus, eget lacinia tellus placerat id. Donec suscipit a dolor eget porttitor. Nulla a quam eget diam pellentesque semper. Proin eu pellentesque sem, ut dapibus risus. Pellentesque malesuada pharetra massa, vitae tristique felis rhoncus sit amet. Duis in risus ut lorem hendrerit vehicula at eget elit. Suspendisse porttitor suscipit tellus, vitae iaculis erat cursus id. Fusce dictum purus et malesuada ullamcorper. Quisque ultricies quis lorem sed tincidunt.
    
    Fusce finibus metus id auctor ultricies. Nulla venenatis venenatis justo et molestie. In vitae ex lorem. Phasellus lacinia mollis diam. Aenean at placerat lacus. Vivamus tempus ut diam at feugiat. Quisque ut aliquet lacus. Nullam bibendum magna nisi, eget vestibulum arcu dapibus a. Sed id rutrum felis. Duis vitae magna consectetur neque dapibus euismod. In hac habitasse platea dictumst. Aliquam in nisl tortor.`
    content.appendChild(temp);
    return content;
}