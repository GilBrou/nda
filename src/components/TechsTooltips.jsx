<ReactTooltip
id = "techTip";
place = "bottom";
textColor = "#ffa101";
arrowColor = "#ffa101";
border = "true";
borderColor = "#ffa101";
effect = "float";
backgroundColor = "#222020";
></ReactTooltip>;

           <ReactTooltip
                            id="techTip"
                            place="bottom"
                            textColor="#ffa101"
                            arrowColor="#ffa101"
                            border="true"
                            borderColor="#ffa101"
                            effect="solid"
                            backgroundColor="#222020"
                          />



                          {/*Dynamic tech icons creation from Json data*/}
                          {d.technos.map(
                            (technos) => (
                              {
                                /*Tech icons*/
                              },
                              (
                                <img
                                  key={technos.name}
                                  loading="lazy"
                                  src={technos.icon}
                                  alt={technos.name}
                                  data-tip={technos.name}
                                  data-for="techTip"
                                />
                              )
                            )
                          )}
                          {/*Tooltip*/}
                          <ReactTooltip
                            id="techTip"
                            place="bottom"
                            textColor="#ffa101"
                            arrowColor="#ffa101"
                            border="true"
                            borderColor="#ffa101"
                            effect="solid"
                            backgroundColor="#222020"
                          />
                        </div>
                        {/*Buttons wrapper*/}