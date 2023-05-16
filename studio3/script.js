(function() {
    'use strict';
    console.log('reading js');

    document.querySelector('button').addEventListener("click", function(){
        location.reload();
    });

    //CA code
        document.querySelector('#ca2').addEventListener('mouseover', showstate);
        
        function showstate(){
            document.querySelector('#ca').className ='showing';
            document.querySelector('#text h2').innerHTML = "California";
        }

        document.querySelector('#ca').addEventListener('mouseenter', function(){
            console.log('entered #ca');
            document.querySelector('#ca').className ='showing';
            document.querySelector('#ca2').removeEventListener('mouseout', hidestate);   
        
        })
        
        document.querySelector('#ca').addEventListener('mouseleave', function(){
            console.log('left #ca')
            document.querySelector('#ca2').addEventListener('mouseout', hidestate);
        })
        // document.querySelector('#ca2').addEventListener('mouseout', hidestate);

        function hidestate(){
            // console.log('hide state')
            // document.querySelector('#ca').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }

    //NV code
        document.querySelector('#nv2').addEventListener('mouseover', showstate2);
            
        function showstate2(){
            document.querySelector('#nv').className ='showing';
            document.querySelector('#text h2').innerHTML = "Nevada";
        }

        document.querySelector('#nv').addEventListener('mouseenter', function(){
            console.log('entered #nv');
            document.querySelector('#nv').className ='showing';
            document.querySelector('#nv2').removeEventListener('mouseout', hidestate2);   
        
        })
        
        document.querySelector('#nv').addEventListener('mouseleave', function(){
            console.log('left #nv')
            document.querySelector('#nv2').addEventListener('mouseout', hidestate2);
        })

        function hidestate2(){
            // document.querySelector('#nv').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    
    // OR code
        document.querySelector('#or2').addEventListener('mouseover', showstate3);
                
        function showstate3(){
            document.querySelector('#or').className ='showing';
            document.querySelector('#text h2').innerHTML = "Oregon";
        }

        document.querySelector('#or').addEventListener('mouseenter', function(){
            console.log('entered #or');
            document.querySelector('#or').className ='showing';
            document.querySelector('#or2').removeEventListener('mouseout', hidestate3);   
        
        })
        
        document.querySelector('#or').addEventListener('mouseleave', function(){
            console.log('left #or')
            document.querySelector('#or2').addEventListener('mouseout', hidestate3);
        })

        function hidestate3(){
            // document.querySelector('#or').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    
    // AZ code
        document.querySelector('#az2').addEventListener('mouseover', showstate4);
                    
        function showstate4(){
            document.querySelector('#az').className ='showing';
            document.querySelector('#text h2').innerHTML = "Arizona";
        }

        document.querySelector('#az').addEventListener('mouseenter', function(){
            console.log('entered #az');
            document.querySelector('#az').className ='showing';
            document.querySelector('#az2').removeEventListener('mouseout', hidestate4);   
        
        })
        
        document.querySelector('#az').addEventListener('mouseleave', function(){
            console.log('left #az')
            document.querySelector('#az2').addEventListener('mouseout', hidestate4);
        })

        function hidestate4(){
            // document.querySelector('#az').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }

    // UT code
        document.querySelector('#ut2').addEventListener('mouseover', showstate5);
                        
        function showstate5(){
            document.querySelector('#ut').className ='showing';
            document.querySelector('#text h2').innerHTML = "Utah";
        }

        document.querySelector('#ut').addEventListener('mouseenter', function(){
            console.log('entered #ut');
            document.querySelector('#ut').className ='showing';
            document.querySelector('#ut2').removeEventListener('mouseout', hidestate5);   
        
        })
        
        document.querySelector('#ut').addEventListener('mouseleave', function(){
            console.log('left #ut')
            document.querySelector('#ut2').addEventListener('mouseout', hidestate5);
        })

        function hidestate5(){
            // document.querySelector('#ut').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // WA code
        document.querySelector('#wa2').addEventListener('mouseover', showstate6);
                            
        function showstate6(){
            document.querySelector('#wa').className ='showing';
            document.querySelector('#text h2').innerHTML = "Washington";
        }

        document.querySelector('#wa').addEventListener('mouseenter', function(){
            console.log('entered #wa');
            document.querySelector('#wa').className ='showing';
            document.querySelector('#wa2').removeEventListener('mouseout', hidestate6);   
        
        })
        
        document.querySelector('#wa').addEventListener('mouseleave', function(){
            console.log('left #wa')
            document.querySelector('#wa2').addEventListener('mouseout', hidestate6);
        })

        function hidestate6(){
            // document.querySelector('#wa').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // ID code
        document.querySelector('#id2').addEventListener('mouseover', showstate7);
                                
        function showstate7(){
            document.querySelector('#id').className ='showing';
            document.querySelector('#text h2').innerHTML = "Idaho";
        }

        document.querySelector('#id').addEventListener('mouseenter', function(){
            console.log('entered #id');
            document.querySelector('#id').className ='showing';
            document.querySelector('#id2').removeEventListener('mouseout', hidestate7);   
        
        })
        
        document.querySelector('#id').addEventListener('mouseleave', function(){
            console.log('left #id')
            document.querySelector('#id2').addEventListener('mouseout', hidestate7);
        })

        function hidestate7(){
            // document.querySelector('#id').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MT code
        document.querySelector('#mt2').addEventListener('mouseover', showstate8);
                                    
        function showstate8(){
            document.querySelector('#mt').className ='showing';
            document.querySelector('#text h2').innerHTML = "Montana";
        }

        document.querySelector('#mt').addEventListener('mouseenter', function(){
            console.log('entered #mt');
            document.querySelector('#mt').className ='showing';
            document.querySelector('#mt2').removeEventListener('mouseout', hidestate8);   
        
        })
        
        document.querySelector('#mt').addEventListener('mouseleave', function(){
            console.log('left #mt')
            document.querySelector('#mt2').addEventListener('mouseout', hidestate8);
        })

        function hidestate8(){
            // document.querySelector('#mt').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // WY code
        document.querySelector('#wy2').addEventListener('mouseover', showstate9);
                                        
        function showstate9(){
            document.querySelector('#wy').className ='showing';
            document.querySelector('#text h2').innerHTML = "Wyoming";
        }

        document.querySelector('#wy').addEventListener('mouseenter', function(){
            console.log('entered #wy');
            document.querySelector('#wy').className ='showing';
            document.querySelector('#wy2').removeEventListener('mouseout', hidestate9);   
        
        })
        
        document.querySelector('#wy').addEventListener('mouseleave', function(){
            console.log('left #wy')
            document.querySelector('#wy2').addEventListener('mouseout', hidestate9);
        })

        function hidestate9(){
            // document.querySelector('#wy').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // CO code
        document.querySelector('#co2').addEventListener('mouseover', showstate10);
                                            
        function showstate10(){
            document.querySelector('#co').className ='showing';
            document.querySelector('#text h2').innerHTML = "Colorado";
        }

        document.querySelector('#co').addEventListener('mouseenter', function(){
            console.log('entered #co');
            document.querySelector('#co').className ='showing';
            document.querySelector('#co2').removeEventListener('mouseout', hidestate10);   
        
        })
        
        document.querySelector('#co').addEventListener('mouseleave', function(){
            console.log('left #co')
            document.querySelector('#co2').addEventListener('mouseout', hidestate10);
        })

        function hidestate10(){
            // document.querySelector('#co').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // NM code
        document.querySelector('#nm2').addEventListener('mouseover', showstate11);
                                                
        function showstate11(){
            document.querySelector('#nm').className ='showing';
            document.querySelector('#text h2').innerHTML = "New Mexico";
        }

        document.querySelector('#nm').addEventListener('mouseenter', function(){
            console.log('entered #nm');
            document.querySelector('#nm').className ='showing';
            document.querySelector('#nm2').removeEventListener('mouseout', hidestate11);   
        
        })
        
        document.querySelector('#nm').addEventListener('mouseleave', function(){
            console.log('left #nm')
            document.querySelector('#nm2').addEventListener('mouseout', hidestate11);
        })

        function hidestate11(){
            // document.querySelector('#nm').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // TX code
        document.querySelector('#tx2').addEventListener('mouseover', showstate12);
                                                    
        function showstate12(){
            document.querySelector('#tx').className ='showing';
            document.querySelector('#text h2').innerHTML = "Texas";
        }

        document.querySelector('#tx').addEventListener('mouseenter', function(){
            console.log('entered #tx');
            document.querySelector('#tx').className ='showing';
            document.querySelector('#tx2').removeEventListener('mouseout', hidestate12);   
        
        })
        
        document.querySelector('#tx').addEventListener('mouseleave', function(){
            console.log('left #tx')
            document.querySelector('#tx2').addEventListener('mouseout', hidestate12);
        })

        function hidestate12(){
            // document.querySelector('#tx').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // OK code
        document.querySelector('#ok2').addEventListener('mouseover', showstate13);
                                                        
        function showstate13(){
            document.querySelector('#ok').className ='showing';
            document.querySelector('#text h2').innerHTML = "Oklahoma";
        }

        document.querySelector('#ok').addEventListener('mouseenter', function(){
            console.log('entered #ok');
            document.querySelector('#ok').className ='showing';
            document.querySelector('#ok2').removeEventListener('mouseout', hidestate13);   
        
        })
        
        document.querySelector('#ok').addEventListener('mouseleave', function(){
            console.log('left #ok')
            document.querySelector('#ok2').addEventListener('mouseout', hidestate13);
        })

        function hidestate13(){
            // document.querySelector('#ok').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // KS code
        document.querySelector('#ks2').addEventListener('mouseover', showstate14);
                                                            
        function showstate14(){
            document.querySelector('#ks').className ='showing';
            document.querySelector('#text h2').innerHTML = "Kansas";
        }

        document.querySelector('#ks').addEventListener('mouseenter', function(){
            console.log('entered #ks');
            document.querySelector('#ks').className ='showing';
            document.querySelector('#ks2').removeEventListener('mouseout', hidestate14);   
        
        })
        
        document.querySelector('#ks').addEventListener('mouseleave', function(){
            console.log('left #ks')
            document.querySelector('#ks2').addEventListener('mouseout', hidestate14);
        })

        function hidestate14(){
            // document.querySelector('#ks').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // NE code
        document.querySelector('#ne2').addEventListener('mouseover', showstate15);
                                                                
        function showstate15(){
            document.querySelector('#ne').className ='showing';
            document.querySelector('#text h2').innerHTML = "Nebraska";
        }

        document.querySelector('#ne').addEventListener('mouseenter', function(){
            console.log('entered #ne');
            document.querySelector('#ne').className ='showing';
            document.querySelector('#ne2').removeEventListener('mouseout', hidestate15);   
        
        })
        
        document.querySelector('#ne').addEventListener('mouseleave', function(){
            console.log('left #ne')
            document.querySelector('#ne2').addEventListener('mouseout', hidestate15);
        })

        function hidestate15(){
            // document.querySelector('#ne').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // SD code
        document.querySelector('#sd2').addEventListener('mouseover', showstate16);
                                                                    
        function showstate16(){
            document.querySelector('#sd').className ='showing';
            document.querySelector('#text h2').innerHTML = "South Dakota";
        }

        document.querySelector('#sd').addEventListener('mouseenter', function(){
            console.log('entered #sd');
            document.querySelector('#sd').className ='showing';
            document.querySelector('#sd2').removeEventListener('mouseout', hidestate16);   
        
        })
        
        document.querySelector('#sd').addEventListener('mouseleave', function(){
            console.log('left #sd')
            document.querySelector('#sd2').addEventListener('mouseout', hidestate16);
        })

        function hidestate16(){
            // document.querySelector('#sd').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // ND code
        document.querySelector('#nd2').addEventListener('mouseover', showstate17);
                                                                    
        function showstate17(){
            document.querySelector('#nd').className ='showing';
            document.querySelector('#text h2').innerHTML = "North Dakota";
        }

        document.querySelector('#nd').addEventListener('mouseenter', function(){
            console.log('entered #nd');
            document.querySelector('#nd').className ='showing';
            document.querySelector('#nd2').removeEventListener('mouseout', hidestate17);   
        
        })
        
        document.querySelector('#nd').addEventListener('mouseleave', function(){
            console.log('left #nd')
            document.querySelector('#nd2').addEventListener('mouseout', hidestate17);
        })

        function hidestate17(){
            // document.querySelector('#nd').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // LA code
        document.querySelector('#la2').addEventListener('mouseover', showstate18);
                                                                        
        function showstate18(){
            document.querySelector('#la').className ='showing';
            document.querySelector('#text h2').innerHTML = "Lousiana";
        }

        document.querySelector('#la').addEventListener('mouseenter', function(){
            console.log('entered #la');
            document.querySelector('#la').className ='showing';
            document.querySelector('#la2').removeEventListener('mouseout', hidestate18);   
        
        })
        
        document.querySelector('#la').addEventListener('mouseleave', function(){
            console.log('left #la')
            document.querySelector('#la2').addEventListener('mouseout', hidestate18);
        })

        function hidestate18(){
            // document.querySelector('#la').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // AR code
        document.querySelector('#ar2').addEventListener('mouseover', showstate19);
                                                                        
        function showstate19(){
            document.querySelector('#ar').className ='showing';
            document.querySelector('#text h2').innerHTML = "Arkansas";
        }

        document.querySelector('#ar').addEventListener('mouseenter', function(){
            console.log('entered #ar');
            document.querySelector('#ar').className ='showing';
            document.querySelector('#ar2').removeEventListener('mouseout', hidestate19);   
        
        })
        
        document.querySelector('#ar').addEventListener('mouseleave', function(){
            console.log('left #ar')
            document.querySelector('#ar2').addEventListener('mouseout', hidestate19);
        })

        function hidestate19(){
            // document.querySelector('#ar').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MO code
        document.querySelector('#mo2').addEventListener('mouseover', showstate20);
                                                                        
        function showstate20(){
            document.querySelector('#mo').className ='showing';
            document.querySelector('#text h2').innerHTML = "Missouri";
        }

        document.querySelector('#mo').addEventListener('mouseenter', function(){
            console.log('entered #mo');
            document.querySelector('#mo').className ='showing';
            document.querySelector('#mo2').removeEventListener('mouseout', hidestate20);   
        
        })
        
        document.querySelector('#mo').addEventListener('mouseleave', function(){
            console.log('left #mo')
            document.querySelector('#mo2').addEventListener('mouseout', hidestate20);
        })

        function hidestate20(){
            // document.querySelector('#mo').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // IA code
        document.querySelector('#ia2').addEventListener('mouseover', showstate21);
                                                                        
        function showstate21(){
            document.querySelector('#ia').className ='showing';
            document.querySelector('#text h2').innerHTML = "Iowa";
        }

        document.querySelector('#ia').addEventListener('mouseenter', function(){
            console.log('entered #ia');
            document.querySelector('#ia').className ='showing';
            document.querySelector('#ia2').removeEventListener('mouseout', hidestate21);   
        
        })
        
        document.querySelector('#ia').addEventListener('mouseleave', function(){
            console.log('left #ia')
            document.querySelector('#ia2').addEventListener('mouseout', hidestate21);
        })

        function hidestate21(){
            // document.querySelector('#ia').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MN code
        document.querySelector('#mn2').addEventListener('mouseover', showstate22);
                                                                        
        function showstate22(){
            document.querySelector('#mn').className ='showing';
            document.querySelector('#text h2').innerHTML = "Minnesota";
        }

        document.querySelector('#mn').addEventListener('mouseenter', function(){
            console.log('entered #mn');
            document.querySelector('#mn').className ='showing';
            document.querySelector('#mn2').removeEventListener('mouseout', hidestate22);   
        
        })
        
        document.querySelector('#mn').addEventListener('mouseleave', function(){
            console.log('left #mn')
            document.querySelector('#mn2').addEventListener('mouseout', hidestate22);
        })

        function hidestate22(){
            // document.querySelector('#mn').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MS code
        document.querySelector('#ms2').addEventListener('mouseover', showstate23);
                                                                        
        function showstate23(){
            document.querySelector('#ms').className ='showing';
            document.querySelector('#text h2').innerHTML = "Mississippi";
        }

        document.querySelector('#ms').addEventListener('mouseenter', function(){
            console.log('entered #ms');
            document.querySelector('#ms').className ='showing';
            document.querySelector('#ms2').removeEventListener('mouseout', hidestate23);   
        
        })
        
        document.querySelector('#ms').addEventListener('mouseleave', function(){
            console.log('left #ms')
            document.querySelector('#ms2').addEventListener('mouseout', hidestate23);
        })

        function hidestate23(){
            // document.querySelector('#ms').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // AL code
        document.querySelector('#al2').addEventListener('mouseover', showstate24);
                                                                        
        function showstate24(){
            document.querySelector('#al').className ='showing';
            document.querySelector('#text h2').innerHTML = "Alabama";
        }

        document.querySelector('#al').addEventListener('mouseenter', function(){
            console.log('entered #al');
            document.querySelector('#al').className ='showing';
            document.querySelector('#al2').removeEventListener('mouseout', hidestate24);   
        
        })
        
        document.querySelector('#al').addEventListener('mouseleave', function(){
            console.log('left #al')
            document.querySelector('#al2').addEventListener('mouseout', hidestate24);
        })

        function hidestate24(){
            // document.querySelector('#al').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // FL code
        document.querySelector('#fl2').addEventListener('mouseover', showstate25);
                                                                        
        function showstate25(){
            document.querySelector('#fl').className ='showing';
            document.querySelector('#text h2').innerHTML = "Florida";
        }

        document.querySelector('#fl').addEventListener('mouseenter', function(){
            console.log('entered #fl');
            document.querySelector('#fl').className ='showing';
            document.querySelector('#fl2').removeEventListener('mouseout', hidestate25);   
        
        })
        
        document.querySelector('#fl').addEventListener('mouseleave', function(){
            console.log('left #fl')
            document.querySelector('#fl2').addEventListener('mouseout', hidestate25);
        })

        function hidestate25(){
            // document.querySelector('#fl').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // GA code
        document.querySelector('#ga2').addEventListener('mouseover', showstate26);
                                                                        
        function showstate26(){
            document.querySelector('#ga').className ='showing';
            document.querySelector('#text h2').innerHTML = "Georgia";
        }

        document.querySelector('#ga').addEventListener('mouseenter', function(){
            console.log('entered #ga');
            document.querySelector('#ga').className ='showing';
            document.querySelector('#ga2').removeEventListener('mouseout', hidestate26);   
        
        })
        
        document.querySelector('#ga').addEventListener('mouseleave', function(){
            console.log('left #ga')
            document.querySelector('#ga2').addEventListener('mouseout', hidestate26);
        })

        function hidestate26(){
            // document.querySelector('#ga').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // SC code
        document.querySelector('#sc2').addEventListener('mouseover', showstate27);
                                                                        
        function showstate27(){
            document.querySelector('#sc').className ='showing';
            document.querySelector('#text h2').innerHTML = "South Carolina";
        }

        document.querySelector('#sc').addEventListener('mouseenter', function(){
            console.log('entered #sc');
            document.querySelector('#sc').className ='showing';
            document.querySelector('#sc2').removeEventListener('mouseout', hidestate27);   
        
        })
        
        document.querySelector('#sc').addEventListener('mouseleave', function(){
            console.log('left #sc')
            document.querySelector('#sc2').addEventListener('mouseout', hidestate27);
        })

        function hidestate27(){
            // document.querySelector('#sc').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // TN code
        document.querySelector('#tn2').addEventListener('mouseover', showstate28);
                                                                        
        function showstate28(){
            document.querySelector('#tn').className ='showing';
            document.querySelector('#text h2').innerHTML = "Tennesse";
        }

        document.querySelector('#tn').addEventListener('mouseenter', function(){
            console.log('entered #tn');
            document.querySelector('#tn').className ='showing';
            document.querySelector('#tn2').removeEventListener('mouseout', hidestate28);   
        
        })
        
        document.querySelector('#tn').addEventListener('mouseleave', function(){
            console.log('left #tn')
            document.querySelector('#tn2').addEventListener('mouseout', hidestate28);
        })

        function hidestate28(){
            // document.querySelector('#tn').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // NC code
        document.querySelector('#nc2').addEventListener('mouseover', showstate29);
                                                                        
        function showstate29(){
            document.querySelector('#nc').className ='showing';
            document.querySelector('#text h2').innerHTML = "North Carolina";
        }

        document.querySelector('#nc').addEventListener('mouseenter', function(){
            console.log('entered #nc');
            document.querySelector('#nc').className ='showing';
            document.querySelector('#nc2').removeEventListener('mouseout', hidestate29);   
        
        })
        
        document.querySelector('#nc').addEventListener('mouseleave', function(){
            console.log('left #nc')
            document.querySelector('#nc2').addEventListener('mouseout', hidestate29);
        })

        function hidestate29(){
            // document.querySelector('#nc').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // WI code
        document.querySelector('#wi2').addEventListener('mouseover', showstate30);
                                                                            
        function showstate30(){
            document.querySelector('#wi').className ='showing';
            document.querySelector('#text h2').innerHTML = "Wisconsin";
        }

        document.querySelector('#wi').addEventListener('mouseenter', function(){
            console.log('entered #wi');
            document.querySelector('#wi').className ='showing';
            document.querySelector('#wi2').removeEventListener('mouseout', hidestate30);   
        
        })
        
        document.querySelector('#wi').addEventListener('mouseleave', function(){
            console.log('left #wi')
            document.querySelector('#wi2').addEventListener('mouseout', hidestate30);
        })

        function hidestate30(){
            // document.querySelector('#wi').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // IL code
        document.querySelector('#il2').addEventListener('mouseover', showstate31);
                                                                            
        function showstate31(){
            document.querySelector('#il').className ='showing';
            document.querySelector('#text h2').innerHTML = "Illinois";
        }

        document.querySelector('#il').addEventListener('mouseenter', function(){
            console.log('entered #il');
            document.querySelector('#il').className ='showing';
            document.querySelector('#il2').removeEventListener('mouseout', hidestate31);   
        
        })
        
        document.querySelector('#il').addEventListener('mouseleave', function(){
            console.log('left #il')
            document.querySelector('#il2').addEventListener('mouseout', hidestate31);
        })

        function hidestate31(){
            // document.querySelector('#il').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // IN code
        document.querySelector('#in2').addEventListener('mouseover', showstate32);
                                                                                
        function showstate32(){
            document.querySelector('#in').className ='showing';
            document.querySelector('#text h2').innerHTML = "Indiana";
        }

        document.querySelector('#in').addEventListener('mouseenter', function(){
            console.log('entered #in');
            document.querySelector('#in').className ='showing';
            document.querySelector('#in2').removeEventListener('mouseout', hidestate32);   
        
        })
        
        document.querySelector('#in').addEventListener('mouseleave', function(){
            console.log('left #in')
            document.querySelector('#in2').addEventListener('mouseout', hidestate32);
        })

        function hidestate32(){
            // document.querySelector('#in').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
     // KY code
        document.querySelector('#ky2').addEventListener('mouseover', showstate33);
                                                                                    
        function showstate33(){
            document.querySelector('#ky').className ='showing';
            document.querySelector('#text h2').innerHTML = "Kentucky";
        }

        document.querySelector('#ky').addEventListener('mouseenter', function(){
            console.log('entered #ky');
            document.querySelector('#ky').className ='showing';
            document.querySelector('#ky2').removeEventListener('mouseout', hidestate33);   
        
        })
        
        document.querySelector('#ky').addEventListener('mouseleave', function(){
            console.log('left #ky')
            document.querySelector('#ky2').addEventListener('mouseout', hidestate33);
        })

        function hidestate33(){
            // document.querySelector('#ky').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // VA code
        document.querySelector('#va2').addEventListener('mouseover', showstate34);
                                                                                    
        function showstate34(){
            document.querySelector('#va').className ='showing';
            document.querySelector('#text h2').innerHTML = "Virginia";
        }

        document.querySelector('#va').addEventListener('mouseenter', function(){
            console.log('entered #va');
            document.querySelector('#va').className ='showing';
            document.querySelector('#va2').removeEventListener('mouseout', hidestate34);   
        
        })
        
        document.querySelector('#va').addEventListener('mouseleave', function(){
            console.log('left #va')
            document.querySelector('#va2').addEventListener('mouseout', hidestate34);
        })

        function hidestate34(){
            // document.querySelector('#va').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MI code
        document.querySelector('#mi2').addEventListener('mouseover', showstate35);
                                                                                    
        function showstate35(){
            document.querySelector('#mi').className ='showing';
            document.querySelector('#text h2').innerHTML = "Michigan";
        }

        document.querySelector('#mi').addEventListener('mouseenter', function(){
            console.log('entered #mi');
            document.querySelector('#mi').className ='showing';
            document.querySelector('#mi2').removeEventListener('mouseout', hidestate35);   
        
        })
        
        document.querySelector('#mi').addEventListener('mouseleave', function(){
            console.log('left #mi')
            document.querySelector('#mi2').addEventListener('mouseout', hidestate35);
        })

        function hidestate35(){
            // document.querySelector('#mi').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // OH code
        document.querySelector('#oh2').addEventListener('mouseover', showstate36);
                                                                                        
        function showstate36(){
            document.querySelector('#oh').className ='showing';
            document.querySelector('#text h2').innerHTML = "Ohio";
        }

        document.querySelector('#oh').addEventListener('mouseenter', function(){
            console.log('entered #oh');
            document.querySelector('#oh').className ='showing';
            document.querySelector('#oh2').removeEventListener('mouseout', hidestate36);   
        
        })
        
        document.querySelector('#oh').addEventListener('mouseleave', function(){
            console.log('left #oh')
            document.querySelector('#oh2').addEventListener('mouseout', hidestate36);
        })

        function hidestate36(){
            // document.querySelector('#oh').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // WV code
        document.querySelector('#wv2').addEventListener('mouseover', showstate37);
                                                                                        
        function showstate37(){
            document.querySelector('#wv').className ='showing';
            document.querySelector('#text h2').innerHTML = "West Virginia";
        }

        document.querySelector('#wv').addEventListener('mouseenter', function(){
            console.log('entered #wv');
            document.querySelector('#wv').className ='showing';
            document.querySelector('#wv2').removeEventListener('mouseout', hidestate37);   
        
        })
        
        document.querySelector('#wv').addEventListener('mouseleave', function(){
            console.log('left #wv')
            document.querySelector('#wv2').addEventListener('mouseout', hidestate37);
        })

        function hidestate37(){
            // document.querySelector('#wv').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // MD code
        document.querySelector('#md2').addEventListener('mouseover', showstate38);
                                                                                        
        function showstate38(){
            document.querySelector('#md').className ='showing';
            document.querySelector('#text h2').innerHTML = "Maryland";
        }

        document.querySelector('#md').addEventListener('mouseenter', function(){
            console.log('entered #md');
            document.querySelector('#md').className ='showing';
            document.querySelector('#md2').removeEventListener('mouseout', hidestate38);   
        
        })
        
        document.querySelector('#md').addEventListener('mouseleave', function(){
            console.log('left #md')
            document.querySelector('#md2').addEventListener('mouseout', hidestate38);
        })

        function hidestate38(){
            // document.querySelector('#md').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // DE code
        document.querySelector('#de2').addEventListener('mouseover', showstate39);
                                                                                        
        function showstate39(){
            document.querySelector('#de').className ='showing';
            document.querySelector('#text h2').innerHTML = "Delaware";
        }

        document.querySelector('#de').addEventListener('mouseenter', function(){
            console.log('entered #de');
            document.querySelector('#de').className ='showing';
            document.querySelector('#de2').removeEventListener('mouseout', hidestate39);   
        
        })
        
        document.querySelector('#de').addEventListener('mouseleave', function(){
            console.log('left #de')
            document.querySelector('#de2').addEventListener('mouseout', hidestate39);
        })

        function hidestate39(){
            // document.querySelector('#de').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // PA code
        document.querySelector('#pa2').addEventListener('mouseover', showstate40);
                                                                                        
        function showstate40(){
            document.querySelector('#pa').className ='showing';
            document.querySelector('#text h2').innerHTML = "Pennsylvania";
        }

        document.querySelector('#pa').addEventListener('mouseenter', function(){
            console.log('entered #pa');
            document.querySelector('#pa').className ='showing';
            document.querySelector('#pa2').removeEventListener('mouseout', hidestate40);   
        
        })
        
        document.querySelector('#pa').addEventListener('mouseleave', function(){
            console.log('left #pa')
            document.querySelector('#pa2').addEventListener('mouseout', hidestate40);
        })

        function hidestate40(){
            // document.querySelector('#pa').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // NJ code
        document.querySelector('#nj2').addEventListener('mouseover', showstate41);
                                                                                        
        function showstate41(){
            document.querySelector('#nj').className ='showing';
            document.querySelector('#text h2').innerHTML = "New Jersey";
        }

        document.querySelector('#nj').addEventListener('mouseenter', function(){
            console.log('entered #nj');
            document.querySelector('#nj').className ='showing';
            document.querySelector('#nj2').removeEventListener('mouseout', hidestate41);   
        
        })
        
        document.querySelector('#nj').addEventListener('mouseleave', function(){
            console.log('left #nj')
            document.querySelector('#nj2').addEventListener('mouseout', hidestate41);
        })

        function hidestate41(){
            // document.querySelector('#nj').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // NY code
        document.querySelector('#ny2').addEventListener('mouseover', showstate42);
                                                                                        
        function showstate42(){
            document.querySelector('#ny').className ='showing';
            document.querySelector('#text h2').innerHTML = "New York";
        }

        document.querySelector('#ny').addEventListener('mouseenter', function(){
            console.log('entered #ny');
            document.querySelector('#ny').className ='showing';
            document.querySelector('#ny2').removeEventListener('mouseout', hidestate42);   
        
        })
        
        document.querySelector('#ny').addEventListener('mouseleave', function(){
            console.log('left #ny')
            document.querySelector('#ny2').addEventListener('mouseout', hidestate42);
        })

        function hidestate42(){
            // document.querySelector('#ny').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // ME code
        document.querySelector('#me2').addEventListener('mouseover', showstate43);
                                                                                            
        function showstate43(){
            document.querySelector('#me').className ='showing';
            document.querySelector('#text h2').innerHTML = "Maine";
        }

        document.querySelector('#me').addEventListener('mouseenter', function(){
            console.log('entered #me');
            document.querySelector('#me').className ='showing';
            document.querySelector('#me2').removeEventListener('mouseout', hidestate43);   
        
        })
        
        document.querySelector('#me').addEventListener('mouseleave', function(){
            console.log('left #me')
            document.querySelector('#me2').addEventListener('mouseout', hidestate43);
        })

        function hidestate43(){
            // document.querySelector('#me').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // CT code
        document.querySelector('#ct2').addEventListener('mouseover', showstate44);
                                                                                            
        function showstate44(){
            document.querySelector('#ct').className ='showing';
            document.querySelector('#text h2').innerHTML = "Connecticut";
        }

        document.querySelector('#ct').addEventListener('mouseenter', function(){
            console.log('entered #ct');
            document.querySelector('#ct').className ='showing';
            document.querySelector('#ct2').removeEventListener('mouseout', hidestate44);   
        
        })
        
        document.querySelector('#ct').addEventListener('mouseleave', function(){
            console.log('left #ct')
            document.querySelector('#ct2').addEventListener('mouseout', hidestate44);
        })

        function hidestate44(){
            // document.querySelector('#ct').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // RI code
        document.querySelector('#ri2').addEventListener('mouseover', showstate45);
                                                                                            
        function showstate45(){
            document.querySelector('#ri').className ='showing';
            document.querySelector('#text h2').innerHTML = "Rhode Island";
        }

        document.querySelector('#ri').addEventListener('mouseenter', function(){
            console.log('entered #ri');
            document.querySelector('#ri').className ='showing';
            document.querySelector('#ri2').removeEventListener('mouseout', hidestate45);   
        
        })
        
        document.querySelector('#ri').addEventListener('mouseleave', function(){
            console.log('left #ri')
            document.querySelector('#ri2').addEventListener('mouseout', hidestate45);
        })

        function hidestate45(){
            // document.querySelector('#ri').className ='hidden';
            document.querySelector('#text h2').innerHTML = "Pick a State";
        }
    // VT code
         document.querySelector('#vt2').addEventListener('mouseover', showstate46);
                                                                                            
         function showstate46(){
             document.querySelector('#vt').className ='showing';
             document.querySelector('#text h2').innerHTML = "Vermont";
         }
 
         document.querySelector('#vt').addEventListener('mouseenter', function(){
             console.log('entered #vt');
             document.querySelector('#vt').className ='showing';
             document.querySelector('#vt2').removeEventListener('mouseout', hidestate46);   
         
         })
         
         document.querySelector('#vt').addEventListener('mouseleave', function(){
             console.log('left #vt')
             document.querySelector('#vt2').addEventListener('mouseout', hidestate46);
         })
 
         function hidestate46(){
            //  document.querySelector('#vt').className ='hidden';
             document.querySelector('#text h2').innerHTML = "Pick a State";
         }
    // NH code
         document.querySelector('#nh2').addEventListener('mouseover', showstate47);
                                                                                            
         function showstate47(){
             document.querySelector('#nh').className ='showing';
             document.querySelector('#text h2').innerHTML = "New Hampshire";
         }
 
         document.querySelector('#nh').addEventListener('mouseenter', function(){
             console.log('entered #nh');
             document.querySelector('#nh').className ='showing';
             document.querySelector('#nh2').removeEventListener('mouseout', hidestate47);   
         
         })
         
         document.querySelector('#nh').addEventListener('mouseleave', function(){
             console.log('left #nh')
             document.querySelector('#nh2').addEventListener('mouseout', hidestate47);
         })
 
         function hidestate47(){
            //  document.querySelector('#nh').className ='hidden';
             document.querySelector('#text h2').innerHTML = "Pick a State";
         }
    // MA code
         document.querySelector('#ma2').addEventListener('mouseover', showstate48);
                                                                                            
         function showstate48(){
             document.querySelector('#ma').className ='showing';
             document.querySelector('#text h2').innerHTML = "Massachusetts";
         }
 
         document.querySelector('#ma').addEventListener('mouseenter', function(){
             console.log('entered #ma');
             document.querySelector('#ma').className ='showing';
             document.querySelector('#ma2').removeEventListener('mouseout', hidestate48);   
         
         })
         
         document.querySelector('#ma').addEventListener('mouseleave', function(){
             console.log('left #ma')
             document.querySelector('#ma2').addEventListener('mouseout', hidestate48);
         })
 
         function hidestate48(){
            //  document.querySelector('#ma').className ='hidden';
             document.querySelector('#text h2').innerHTML = "Pick a State";
         }
})()