<?PHP

if($_POST && isset($_POST['cmd'], $_POST['hit'])) {

    $cmd = $_POST['cmd'];
    $hit = $_POST['hit'];

    if('send' == $cmd) {
        include 'lib/ss-ga.class.php';

        $ssga = new ssga( 'UA-40601502-2', 'carljamilkowski.com' );

        $page = $_POST['page'];
        $pageTitle = $_POST['pageTitle'];
        $eventCategory = $_POST['eventCategory'];
        $eventLabel = $_POST['eventLabel'];
        $eventValue = $_POST['eventValue'];

        $viewportResolution = $_POST['viewportResolution'];
        $screenResolution = $_POST['screenResolution'];
        $colorDepth = $_POST['colorDepth'];
        $lang = $_POST['lang'];

        if(isset($viewportResolution)) {
            $ssga->set_viewport_resolution($viewportResolution);
        }
        if(isset($screenResolution)) {
            $ssga->set_screen_resolution($screenResolution);
        }
        if(isset($colorDepth)) {
            $ssga->set_screen_depth($colorDepth);
        }
        if($lang) {
            $ssga->set_lang($lang);
        }

        if(isset($page)) {
            $ssga->set_page( $page );

            if(isset($pageTitle)) {
                $ssga->set_page_title( $pageTitle );
            }
        }

        switch($hit) {
            case "pageview":
                //Set a pageview - ga('send', 'pageview')
                if(!isset($page)) {
                    header('HTTP/1.1 500 Internal Server Error');
                    header('Content-Type: application/json; charset=UTF-8');
                    die(json_encode(array('message' => 'no page specified', 'code' => 1337)));
                }
                break;
            case "event":
                // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
                if(isset($eventCategory)) {
                    $ssga->set_event( $eventCategory, $eventLabel, $eventValue);
                    // $ssga->send();
                } else {
                    header('HTTP/1.1 500 Internal Server Error');
                    header('Content-Type: application/json; charset=UTF-8');
                    die(json_encode(array('message' => 'no event category specified', 'code' => 1337)));
                }
                break;
            default:
                exit("unknown hit");
        }

        // Send
        $ssga->send();
        $ssga->reset();
    } else {
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'non send command', 'code' => 1337, 'cmd' => $cmd)));
    }
}

?>