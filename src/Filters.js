import React from 'react';
import './Filters.css';

function Filters() {
    return (
        <div className="Filters col-3">
            <h3 className='pb-2'>Filter Results</h3>
            <form>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="AccountRequired" />
                    <label class="form-check-label" for="AccountRequired">
                        Account Required
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="open" />
                    <label class="form-check-label" for="open">
                        Public / Open Source
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="category" />
                    <label class="form-check-label" for="category">
                        Category (6)
                    </label>

                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="air" value="air" />
                            <label class="form-check-label" for="air">
                                Air (2)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="land" value="land" />
                            <label class="form-check-label" for="land">
                                Land
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="sky" value="sky" />
                            <label class="form-check-label" for="sky">
                                Sky (4)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="water" value="water" />
                            <label class="form-check-label" for="water">
                                Water (3)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="climate" value="climate" />
                            <label class="form-check-label" for="climate">
                                Climate Change (1)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="category" id="agriculture" value="agriculture" />
                            <label class="form-check-label" for="agriculture">
                                Agriculture
                            </label>
                        </div>

                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="type" />
                    <label class="form-check-label" for="type">
                        Type
                    </label>

                    <div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="type" id="images" value="images" />
                            <label class="form-check-label" for="images">
                                Images
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="type" id="data" value="data" />
                            <label class="form-check-label" for="data">
                                Raw Data
                            </label>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default Filters;